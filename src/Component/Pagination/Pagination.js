import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination{
            font-size :14px 
            } 
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next "
        previousLabel="Prev"
        nextClassName="btn btn-primary next"
        previousClassName=" btn btn-primary prev"
        pageClassName="page-item"
        marginPagesDisplayed={width < 576 ? 1 :2}
        pageRangeDisplayed={width < 576 ? 1 :2}
        activeClassName="active"
        previousLinkClassName="text-white text-decoration-none fs-0.9 fw-bold"
        nextLinkClassName="text-white text-decoration-none fs-0.9 fw-bold"
        onPageActive={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageLinkClassName="page-link"
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
