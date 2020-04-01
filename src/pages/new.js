import React, { useState, useEffect } from 'react';
// import { Link } from "gatsby"


import PropTypes from "prop-types"
import ListingContainer from "../components/listingContainer"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"


const NewPage = (props) => {

  // console.log(props.location.pathname)


  // const [seconds, setSeconds] = useState();

  // useEffect(() => {

  // });

  return (
    <div>
      <ListingContainer
        endpoint="subreddit"
        category="new"
      />
    </div>
  )
}

// IndexPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default NewPage
