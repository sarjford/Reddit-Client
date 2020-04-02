import React from 'react';
import PropTypes from 'prop-types';
import ListingContainer from '../components/listingContainer';


const TopPage = (props) => {
  return (
    <div>
      <ListingContainer
        endpoint="all"
        category="top"
      />
    </div>
  )
}

// IndexPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default TopPage
