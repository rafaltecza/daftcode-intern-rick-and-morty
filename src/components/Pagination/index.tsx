import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber = 0, info = {
    pages: 0
}, updatePageNumber = (index: number) => {} }) => {

    const [width, setWidth] = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    let pageChange = (data: any) => {
        updatePageNumber(data.selected + 1);
    };

    return (
        <ReactPaginate
            className="pagination justify-content-center my-4 gap-4"
            nextLabel="Next"
            previousLabel="Prev"
            previousClassName="btn btn-primary fs-5 prev text-white bg-animated-gradient-bb"
            nextClassName="btn btn-primary fs-5 next text-white bg-animated-gradient-bb"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width < 576 ? 1 : 2}
            pageCount={info['pages']}
            onPageChange={pageChange}
        />
    );
}

export default Pagination;

