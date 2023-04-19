import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
    dispatch({ type: FETCH_POSTS, payload: response.data });
};