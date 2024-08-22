import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Cards = ({ results, page }) => {
  let display;
  // console.log(results);
  if (results) {
    display = results.map((x) => {
      let { id, name, location, image, status } = x;
      return (
        <Link
        style={{textDecoration:"none"}}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 position-relative mb-4 text-dark"
        >
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img
              src={image}
              alt="character images"
              className={`${styles.img} img-fluid`}
            />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Lsat Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} badge bg-danger position-absolute`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} badge bg-success position-absolute`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} badge bg-secondary position-absolute`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = " No characters found :(";
  }

  return <>{display}</>;
};

export default Cards;
