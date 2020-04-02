import React from 'react';

import PropTypes from "prop-types"
import ListingContainer from "../components/listingContainer"

const NewPage = (props) => {
  return (
    <div>
      <ListingContainer
        endpoint="all"
        category="new"
      />
    </div>
  )
}

// IndexPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default NewPage
