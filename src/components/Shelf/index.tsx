import React from "react";
import { Book } from "../Book";
import { Book as BookProps } from "../../models";
import "./shelf.style.scss";

interface ShelveProps {
  title: string;
  books: BookProps[];
}

export const Shelf = ({ title, books }: ShelveProps) => {
  return (
    <div className="shelve-container">
      <div className="shelve-title">
        <h3>{title}</h3>
      </div>
      <div className="book-container">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};
