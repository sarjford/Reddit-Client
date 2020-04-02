import React, { useContext, useState } from "react"
import {Link} from "gatsby"
// import PropTypes from "prop-types"

import { AppContext } from "./context"
import "./header.scss"

const Navigation = (props) => {

  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div className="app-nav">
      <p>Popular posts</p>
      <div className="tile nav-container">
        <Link to="/hot">
          <div className={path === '/hot' || path === '/' ? 'link selected' : 'link'}>
            <svg className="hot-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Hot</title><path d="M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"></path></svg>
            <span>Hot</span>
          </div>
        </Link>
        <Link to="/new">
        <div className={path === '/new' ? 'link selected' : 'link'}>
            <svg id="new-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><polygon fill="inherit" points="17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"></polygon></g></svg>
            <span>New</span>
          </div>
        </Link>
        <Link to="/top">
          <div className={path === '/top' ? 'link selected' : 'link'}>
            <svg className="top-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><path fill="inherit" d="M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"></path></g></svg>
            <span>Top</span>
          </div>
        </Link>
        <Link to="/rising">
          <div className={path === '/rising' ? 'link selected' : 'link'}>
            <svg className="rising-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g><path fill="inherit" d="M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"></path></g></svg>
            <span>Rising</span>
          </div>
        </Link>
        <Link to="/pics">
          <div className={path === '/pics' ? 'link selected' : 'link'}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 14.225 14.225">
            <g>
              <g>
                <path fill="inherit" d="M10.305,3.051c0.018-0.092,0.029-0.187,0.029-0.285c0-0.827-0.672-1.499-1.5-1.499H5.389    c-0.828,0-1.5,0.671-1.5,1.499c0,0.098,0.011,0.193,0.029,0.285H0v9.906h14.225V3.051H10.305z M1.896,5.636    c-0.428,0-0.773-0.347-0.773-0.774s0.346-0.773,0.773-0.773c0.427,0,0.773,0.347,0.773,0.773C2.669,5.291,2.323,5.636,1.896,5.636    z M7.112,11.542c-1.954,0-3.537-1.583-3.537-3.536c0-1.954,1.583-3.538,3.537-3.538c1.953,0,3.537,1.583,3.537,3.538    C10.649,9.958,9.065,11.542,7.112,11.542z"/>
              </g>
            </g>
          </svg>
          <span>Pictures</span>
          </div>
        </Link>
      </div>
    </div>
  )
}


// HotPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Navigation;
