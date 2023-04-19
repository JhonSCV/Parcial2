import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";

export const useFetchPosts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
};
