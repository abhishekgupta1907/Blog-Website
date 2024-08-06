import React from "react";
import { useParams, useLocation } from "react-router-dom";
export const SingleBlog = () => {
    const { blogid } = useParams();

    const { state } = useLocation();
    const data = state && state.find((el) => el.id === Number(blogid));
    console.log(data);
    return (
        <>
            <div className="mt-4 card">
                <div className="card-body">
                    <h3>{data?.title}</h3>
                    <p>{data?.description}</p>
                </div>
            </div>
        </>
    );
};
