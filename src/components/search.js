import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Search = (props) => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="tile search-tile">
      <div className="search-box">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"></path>
        </svg>
        <input 
          placeholder={`Search within '${props.page}' posts. To submit click Search button.`}
          onChange={event => setSearchTerm(event.target.value)}>
        </input>
      </div>
      <button type="submit" onClick={props.submitSearch.bind(null, searchTerm)}>Search</button>
    </div>
  )
}

// IndexPage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Search;
