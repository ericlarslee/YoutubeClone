import React from 'react';

const Search = (props) => {
return (
     <div>
         <form  onSubmit={props.onSubmit} className="search-form">
             <div className='form-controls'>
                 <label>Search</label>
                 <input id="searchTerm" 
                        onChange={props.handleChange}
                        type='text' 
                        placeholder="Enter search keyword"/>
                 <input type='submit' />
             </div>
         </form>
     </div>
    )
}


export default Search;