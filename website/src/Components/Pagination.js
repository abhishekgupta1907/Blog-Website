import React from "react";

const Pagination = ({ onPagechange, currentPage, blogs, pageSize }) => {
    const totalPage = Math.ceil(blogs.length / pageSize);

    //console.log(totalPage);
    const renderPaginationLinks = () => {
        return Array.from({ length: totalPage }, (_, i) => i + 1).map(
            (pageNumber) => (
                <li
                    className={
                        pageNumber === currentPage ? "activePagination" : ""
                    }
                    key={pageNumber}
                >
                    <a href="#" onClick={() => onPagechange(pageNumber)}>
                        {pageNumber}
                    </a>
                </li>
            )
        );
    };
    return (
        <ul className="pagination my-8  flex gap-4">
            <li>
                <button
                    onClick={() => onPagechange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
            </li>
            <div className="flex gap-1">{renderPaginationLinks()} </div>
            <li>
                <button
                    onClick={() => onPagechange(currentPage + 1)}
                    disabled={currentPage === totalPage}
                >
                    Next
                </button>
            </li>
        </ul>
    );
};

export default Pagination;
