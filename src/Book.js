import React from "react";

function Book(props) {
  const { img, title, author, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author} </h4>
      <h3>{number + 1}</h3>
    </article>
  );
}

export default Book;
