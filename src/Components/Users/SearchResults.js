import "./searchResults.css";
import "./Result.js";
import Result from "./Result.js";

export default function SearchResults({ result }) {
  return (
    <>
      <div className="searchresults__container">
        {result.map((res) => (
          <Result value={res.name} />
        ))}
      </div>
    </>
  );
}
