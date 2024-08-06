import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
export const SingleBlog = () => {
    const { blogid } = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();
    const data = state && state.find((el) => el.id === Number(blogid));
    console.log(data);
    useEffect(() => {
        navigate("/showblog", { state: { data }, replace: true });
    }, [data, navigate]);
    return <></>;
};
