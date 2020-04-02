import React from 'react';
import PropTypes from 'prop-types';
import ListingContainer from '../components/listingContainer';


const HotPage = (props) => {
  return (
    <div>
      <ListingContainer
        endpoint="all"
        category="hot"
      />
    </div>
  )
}

HotPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HotPage
