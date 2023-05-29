import React from "react";

function Article({ title, text, date = "January 1, 1970"}) {
    //console.log(props);
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{text}</p>
        </article>
    )
}

export default Article;
