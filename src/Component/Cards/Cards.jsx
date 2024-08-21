import React from "react";
import styles from "./Card.module.css";
const Cards = ({ results }) => {
  let display;
  // console.log(results);
  if (results) {
    display = results.map((x) => {
      let { id, name, location, image, status } = x;
      return (
        <div key={id} className="col-4 position-relative mb-4 ">
          <div className={styles.cards}>
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
        
        </div>
      );
    });
  } else {
    display = " No characters found :(";
  }

  return <>{display}</>;
};

export default Cards;
