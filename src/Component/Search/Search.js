import React from "react";
import styles from "./Search.module.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center mb-5 gap-4">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        type="text"
        className={styles.input}
        placeholder="Search For Character"
      />
      <button
        onClick={(e) => e.preventDefault()}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
