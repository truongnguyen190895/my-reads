import React from "react";
import { Book as BookProps } from "../../models";
import { ArrowDropdownIcon } from "../Icons";
import "./book.style.scss";

export const Book = ({ imageLinks, title, authors }: BookProps) => {
  return (
    <div className="book-cover-container">
      <img src={imageLinks.thumbnail} alt="book-cover" width="100%" />
      <h4>{title}</h4>
      {authors.map((author) => (
        <p>{author}</p>
      ))}
      <div className="icon-container">
        <ArrowDropdownIcon width={50} height={50} />
      </div>
    </div>
  );
};
