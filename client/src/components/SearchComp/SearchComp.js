import React from 'react';
import './searchComp.css';

function SearchComp() {
    return (
        <div>
            <form>
                <input className='searchBar' type='text' placeholder='Search'></input>
                <button className='searchBtn' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchComp
