import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    //console.log(post);
    return (
        <main>
            {posts.map(content => <article key = {content.id}></article>) }
        </main>
    );
}

export default ArticleList;
