import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Search = ({ events }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    let searchEvents = events.filter((event) => {
      return e.target.value !== "" && event.name.includes(e.target.value) || event.organizer.includes(e.target.value);
    });
    setSearchResult(searchEvents);
  };
  return (
    <div className="searchPage">
      <div id="search">
        <input
          value={searchInput}
          onChange={handleSearch}
          type="text"
          id="searchInput"
          placeholder="Search a event..."
          required
        />

        <a id="searchIcon" href="www.google.com.tr">
          <i className="fas fa-search"></i>
        </a>
      </div>
      <ul
        className="resultBox"
        style={
          searchResult.length === 0 ? { display: "none" } : { display: "block" }
        }
      >
        {searchResult.length > 0
          ? searchResult.map((event, index) => (
              <li key={index}>
                <Link style={{ display: "block" }} to={`/events/${event.name}`}>
                  <span>  {event.name}</span>
                  <span>{event.organizer}</span>
                  <span>{event.organizer}</span>
                </Link>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Search;
