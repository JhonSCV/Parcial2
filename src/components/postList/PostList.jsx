import React from "react";
import { useSelector } from "react-redux";
import PostListItem from "./PostListItem";
import "./PostList.css";
import { useFetchPosts } from "../../hooks/useFetchPost";

const PostList = () => {
    useFetchPosts();
    const posts = useSelector((state) => state.posts.posts);

    return (
        <div className="post-list">
        {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
        ))}
    </div>
    );
};

export default PostList;
