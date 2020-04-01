import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import Header from "./header"

import { AppProvider } from "./context"

import "./layout.css"




const Layout = ({ children }) => {

  console.log(Header)

  return (
    <AppProvider>
      <Header />
      <main>{children}</main>
    </AppProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

