import React, { 
  useEffect,
  useReducer,
  useCallback,
  useRef,
  useState
} from 'react';
import {Link} from "gatsby"
import axios from "axios"


// import PropTypes from "prop-types"

// import { AppProvider } from "./context"

import "./layout.css"

const ListingContainer = (props) => {

  const listingReducer = (state, action) => {
    switch (action.type) {
      case 'CONCAT_LISTINGS':
        return { ...state, data: state.data.concat(action.listings) }
      case 'FETCH_LISTINGS':
        return { ...state, fetching: action.fetching }
      default:
        return state;
    }
  }
  const [listingData, listingDispatch] = useReducer(listingReducer,{ data:[], fetching: true })

  const pageReducer = (state, action) => {
    switch (action.type) {
      case 'ADVANCE_PAGE':
        return { ...state, count: state.count + 25 }
      default:
        return state;
    }
  }
  const [ currentPage, pageDispatch ] = useReducer(pageReducer, {count: 0})

  const [pagination, setPagination] = useState(null)
 

  useEffect(() => {
    console.log('pagination ', pagination)
    listingDispatch({ type: 'FETCH_LISTINGS', fetching: true })

    axios.get(`/.netlify/functions/getListings?endpoint=${props.endpoint}&category=${props.category}&count=${currentPage.count}&after=${pagination}`)

      .then(( data ) => {
        // console.log('DATA ', data)
        const listings = data.data.data.children
        const pagination = data.data.data.after
        console.log('PAGINATION ', pagination)
        setPagination(pagination)
        listingDispatch({ type: 'CONCAT_LISTINGS', listings })
        listingDispatch({ type: 'FETCH_LISTINGS', fetching: false })
      })
      .catch(e => {
        listingDispatch({ type: 'FETCH_LISTINGS', fetching: false })
        return e
      })
  }, [ listingDispatch, currentPage.count ])


  let bottomBoundaryRef = useRef(null);
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            pageDispatch({ type: 'ADVANCE_PAGE' });
          }
        });
      }).observe(node);
    },
    [pageDispatch]
  );
  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  return (
    <div>
      <ul>
        {listingData.data.map((listing, index) =>
          <Listing
            title={listing.data.title}
            url={listing.data.url}
            key={index}
          />
        )}
      </ul>
      <div id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={bottomBoundaryRef}></div>
    </div>
  )
}

const Listing = (props) => {
  console.log(props)
  return (
    <li>
      <Link to={props.url}>
        <h2>{props.title}</h2>
      </Link>
    </li>
  )
}

export default ListingContainer
