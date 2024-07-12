import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBook } from "../../context/bookContext";
import { Book as BookType } from "../../models";
import { BookAction } from "../BookAction";
import { ArrowDropdownIcon } from "../Icons";
import "./book.style.scss";

interface BookProps extends BookType {}

export const Book = (props: BookProps) => {
  const { imageLinks, title, authors, shelf } = props;
  const navigate = useNavigate();
  const { updateBook } = useBook();
  const [show, setShow] = useState<boolean>(false);

  const handleToggleMenu = (e: any) => {
    e.stopPropagation();
    setShow((prev) => !prev);
  };

  const handleMoveBook = (destination: string) => {
    setShow(false);
    updateBook(props, destination);
    navigate("/");
  };

  return (
    <div className="book-cover-container" onClick={() => setShow(false)}>
      <img src={imageLinks.thumbnail} alt="book-cover" width="100%" />
      <h4>{title}</h4>
      {authors?.map((author, index) => (
        <p key={index}>{author}</p>
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
          activeShelf={shelf}
          onBookUpdate={(destination) => handleMoveBook(destination)}
        />
      </div>
    </div>
  );
};
