import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    return (
        <main>
            {posts.map(content => <Article key = {content.id} title = {content.title} preview = {content.preview} date = {content.date} minutes = {content.minutes}/>)}
        </main>
    );
}

export default ArticleList;
