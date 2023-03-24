import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
let count = 0;

const SearchBox = () => {
  const [enterValue, setEnteredValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  async function searchAPI() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const results = await res.json();
    setSearchResults(
      results.filter((result) =>
        result.name.toLowerCase().includes(enterValue.toLowerCase())
      )
    );
  }
  function searchHandler(e) {
    setEnteredValue(e.target.value);
    count++;
  }

  useEffect(() => {
    if (enterValue && count > 3) {
      searchAPI();
      count = 0;
    }
  }, [enterValue]);
  return (
    <>
      {" "}
      <div style={{ margin: "0 auto" }}>
        <label htmlFor="username">Search</label>
        <input
          id="username"
          value={enterValue}
          onChange={searchHandler}
          type="text"
        />

        {enterValue && <SearchResults result={searchResults} />}
      </div>
    </>
  );
};

export default SearchBox;
