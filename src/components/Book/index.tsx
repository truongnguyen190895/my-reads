import React from "react";
import { Book as BookProps } from "../../models";
import "./book.style.scss";

export const Book = ({ imageLinks }: BookProps) => {
  return (
    <div className="book-list-container">
      <img src={imageLinks.thumbnail} alt="book-cover" width="100%" />
    </div>
  );
};
