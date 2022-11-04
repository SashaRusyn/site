import React from 'react';
import './styles/Main-Page-Styles.css';
import search_icon from './images/search-icon.png';

const Search_Header = () => {
    return (
        <div className="search-area">
            <h1 className="search-text">Знайдіть вашу квартиру зараз</h1>
            <form>
                <input className="search-input" type="search" placeholder="Введіть назву міста"></input>
                <img className="search-magnifier click" src={search_icon} alt="search-icon"></img>
            </form>
        </div>
    );
}

export default Search_Header;