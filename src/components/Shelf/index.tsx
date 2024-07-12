import React from "react";
import { Book } from "../Book";
import { Book as BookProps } from "../../models";
import "./shelf.style.scss";

interface ShelveProps {
  title: string;
  books: BookProps[];
  onMuteBook: (bookId: string, destination: number) => void;
}

export const Shelf = ({ title, books, onMuteBook }: ShelveProps) => {
  return (
    <div className="shelve-container">
      <div className="shelve-title">
        <h3>{title}</h3>
      </div>
      <div className="book-container">
        {books.map((book) => (
          <Book key={book.id} {...book} onMuteBook={onMuteBook} />
        ))}
      </div>
    </div>
  );
};
