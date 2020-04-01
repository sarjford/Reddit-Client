import React, { useState, useEffect } from 'react';
// import { Link } from "gatsby"


import PropTypes from "prop-types"
import ListingContainer from "../components/listingContainer"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"


const RisingPage = (props) => {

  // console.log(props.location.pathname)


  // const [seconds, setSeconds] = useState();

  // useEffect(() => {

  // });

  return (
    <div>
      <ListingContainer
        endpoint="subreddit"
        category="rising"
      />
    </div>
  )
}

// IndexPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default RisingPage
