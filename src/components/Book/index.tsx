import React, { useState } from "react";
import { Book as BookType } from "../../models";
import { ArrowDropdownIcon } from "../Icons";
import { BookAction } from "../BookAction";
import "./book.style.scss";

interface BookProps extends BookType {
  onMuteBook: (bookId: string, destination: number) => void;
}

export const Book = ({
  id,
  imageLinks,
  title,
  authors,
  shelf,
  onMuteBook,
}: BookProps) => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggleMenu = (e: any) => {
    e.stopPropagation();
    setShow((prev) => !prev);
  };

  const parseShelf = () => {
    switch (shelf) {
      case "currentlyReading":
        return 1;
      case "wantToRead":
        return 2;
      case "read":
        return 3;

      default:
        return 1;
    }
  };

  return (
    <div className="book-cover-container" onClick={() => setShow(false)}>
      <img src={imageLinks.thumbnail} alt="book-cover" width="100%" />
      <h4>{title}</h4>
      {authors.map((author) => (
        <p>{author}</p>
      ))}
      <div className="icon-container">
        <ArrowDropdownIcon width={50} height={50} onClick={handleToggleMenu} />
      </div>
      <div
        className="actions-container"
        style={{ display: show ? "block" : "none" }}
        onClick={(e) => e.stopPropagation()}
      >
        <BookAction
          activeStatus={parseShelf()}
          onBookUpdate={(destination) => onMuteBook(id, destination)}
        />
      </div>
    </div>
  );
};
