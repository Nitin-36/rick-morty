import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./Component/Filters/Filter";
import Cards from "./Component/Cards/Cards";
import Pagination from "./Component/Pagination/Pagination";
import Search from "./Component/Search/Search";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episode from "./Pages/Episode";
import Location from "./Pages/Location";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchData, updatedFetchData] = useState([]);
  let { info, results} = fetchData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updatedFetchData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />
          <div className="col-8">
            <div className="row">
              <Cards results ={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
