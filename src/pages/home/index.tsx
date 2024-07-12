import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddIcon, Button, Shelf } from "../../components";
import { useAuth } from "../../context/auth";
import { useBook } from "../../context/bookContext";
import "./home.style.scss";

export const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { books, getAllBooks } = useBook();

  useEffect(() => {
    if (books === null) {
      getAllBooks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

  const handleNavigateToSearchPage = () => {
    navigate("/search");
  };

  if (books === null) {
    return <></>;
  }

  return (
    <div className="home-page-container">
      <div className="header">
        <h2>My Reads</h2>
        <Button onClick={() => logout()}>Logout</Button>
      </div>
      <div className="content">
        <Shelf
          title="Currently Reading"
          books={books.filter((book) => book.shelf === "currentlyReading")}
        />
        <Shelf
          title="Want to read"
          books={books.filter((book) => book.shelf === "wantToRead")}
        />
        <Shelf
          title="Read"
          books={books.filter((book) => book.shelf === "read")}
        />
      </div>
      <div className="add-icon" onClick={handleNavigateToSearchPage}>
        <AddIcon width={80} height={80} />
      </div>
    </div>
  );
};
