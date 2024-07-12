import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../api";
import { Book } from "../../models";
import { AddIcon, Shelf } from "../../components";
import "./home.style.scss";

export const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getAll()
      .then((response) => setBooks(response))
      .catch((error) => console.error("Fail to fetch books ", error));
  }, []);

  const handleNavigateToSearchPage = () => {
    navigate("/search");
  };

  const handleUpdate = (bookId: string, destination: number) => {
    let targetShelf = "currentlyReading";
    if (destination !== 1) {
      targetShelf = destination === 2 ? "wantToRead" : "read";
    }
    setBooks((prev) => {
      const cloneBooks = [...prev];
      const targetBookPosition = cloneBooks.findIndex(
        (book) => book.id === bookId
      );
      if (targetBookPosition > -1) {
        cloneBooks[targetBookPosition].shelf = targetShelf;
      }
      return cloneBooks;
    });
  };

  return (
    <div className="home-page-container">
      <div className="header">
        <h2>My Reads</h2>
      </div>
      <div className="content">
        <Shelf
          title="Currently Reading"
          books={books.filter((book) => book.shelf === "currentlyReading")}
          onMuteBook={handleUpdate}
        />
        <Shelf
          title="Want to read"
          books={books.filter((book) => book.shelf === "wantToRead")}
          onMuteBook={handleUpdate}
        />
        <Shelf
          title="Read"
          books={books.filter((book) => book.shelf === "read")}
          onMuteBook={handleUpdate}
        />
      </div>
      <div className="add-icon" onClick={handleNavigateToSearchPage}>
        <AddIcon width={80} height={80} />
      </div>
    </div>
  );
};
