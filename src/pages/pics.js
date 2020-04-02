import React from 'react';

import PropTypes from "prop-types"
import ListingContainer from "../components/listingContainer"


const PicsPage = (props) => {
  return (
    <div>
      <ListingContainer
        category="pics"
        endpoint="pics"
      />
    </div>
  )
}

// IndexPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default PicsPage

