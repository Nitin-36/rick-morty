import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      nextLabel="Next "
      previousLabel="Prev"
      previousClassName=" btn btn-primary"
      nextClassName="btn btn-primary"
      pageClassName="page-item"
      activeClassName="active"
      previousLinkClassName="text-white text-decoration-none fs-0.9 fw-bold" 
      nextLinkClassName="text-white text-decoration-none fs-0.9 fw-bold"
      onPageActive={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageLinkClassName="page-link"
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
