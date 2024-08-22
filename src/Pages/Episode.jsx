import React, { useEffect, useState } from "react";
import Cards from "../Component/Cards/Cards";
import InputGroup from "../Component/Filters/Category/InputGroup";

const Episode = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { air_date, name } = info;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

   useEffect(() => {
  (async function () {
    try {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let cat = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(cat);
      console.log("Fetched characters:", cat); // Check the fetched data
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  })();
}, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>

      <div className="row">
        <div className="col-lg-3 col-12">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup setId={setId} name="Episode" total={51} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page="/episode" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;


// import React, { useEffect, useState } from "react";
// import Cards from "../Component/Cards/Cards";
// import InputGroup from "../Component/Filters/Category/InputGroup";

// const Episode = () => {
//   let [id, setId] = useState(1);
//   let [info, setInfo] = useState([]);
//   let [results, setResults] = useState([]);
//   let { air_date, name } = info;
//   let api = `https://rickandmortyapi.com/api/episode/${id}`;

//   useEffect(() => {
//     (async function () {
//       try {
//         let data = await fetch(api).then((res) => res.json());
//         setInfo(data);

//         let cat = await Promise.all(
//           data.characters.map((x) => {
//             return fetch(x).then((res) => res.json());
//           })
//         );
//         setResults(cat);
//         console.log("Fetched characters:", cat); // Check the fetched data
//       } catch (error) {
//         console.error("Failed to fetch data:", error);
//       }
//     })();
//   }, [api]);

//   return (
//     <div className="container">
//       <div className="row mb-4">
//         <h1 className="text-center mb-4">
//           Episode:{" "}
//           <span className="text-primary">{name || "Unknown"}</span>
//         </h1>
//         <h5 className="text-center">
//           Air Date: {air_date || "Unknown"}
//         </h5>
//       </div>

//       <div className="row">
//         <div className="col-3">
//           <h4 className="text-center mb-4">Pick Episodes</h4>
//           <InputGroup setId={setId} name="Episode" total={51} />
//         </div>
//         <div className="col-8">
//           <div className="row">
//             {results.length > 0 ? (
//               <Cards results={results} />
//             ) : (
//               <p>No characters to display</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Episode;

