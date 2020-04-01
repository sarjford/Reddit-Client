import React from "react"


const initialState = {
  device: typeof window !== 'undefined' ? (window.innerWidth < 768 ? 'mobile' : 'desktop' ) : '',
  pathname: typeof window !== 'undefined' ? window.location.pathname : ''
}
const AppContext = React.createContext(initialState)
const Provider = AppContext.Provider
const AppConsumer = AppContext.Consumer

class AppProvider extends React.Component {
  constructor() {
    super()

    this.setData = this.setData.bind(this)
    this.state = {
      ...initialState,
      set: this.setData,
    }
  }

  setData(newData) {
    this.setState({
      ...newData,
    })
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { AppConsumer, AppProvider, AppContext }
