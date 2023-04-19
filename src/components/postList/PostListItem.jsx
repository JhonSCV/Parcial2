import React from "react";

const PostListItem = ({ post }) => {
    return (
        <div className="post-list-item">
        <h3>{post.title}</h3>
        <img src={post.thumbnailUrl} alt={post.title} />
    </div>
    );
};

export default PostListItem;
