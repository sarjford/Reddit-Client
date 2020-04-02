import React from 'react';

import PropTypes from 'prop-types';
import ListingContainer from '../components/listingContainer';


const IndexPage = (props) => {
  return (
    <div>
      <ListingContainer
        endpoint="all"
        category="hot"
      />
    </div>
  )
}

IndexPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexPage;
