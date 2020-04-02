import React from 'react';
import PropTypes from 'prop-types';
import ListingContainer from '../components/listingContainer';


const RisingPage = (props) => {
  return (
    <div>
      <ListingContainer
        endpoint="all"
        category="rising"
      />
    </div>
  )
}

// IndexPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default RisingPage
