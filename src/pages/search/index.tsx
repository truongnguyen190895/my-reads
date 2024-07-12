import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks";
import { useBook } from "../../context/bookContext";
import { Book as BookProps } from "../../models";
import { ArrowBackIcon, SearchBar, Book } from "../../components";
import { search } from "../../api";
import "./search.style.scss";

export const Search = () => {
  const navigate = useNavigate();
  const { books } = useBook();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchValue, 500);
  const [results, setResults] = useState<BookProps[]>([]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform the search with debouncedSearchTerm
      search(debouncedSearchTerm, 100).then((response) => {
        if (Array.isArray(response)) {
          const finalResult = response.map((incomingBook) => {
            const matchingBook = (books || []).find(
              (book) => book.id === incomingBook.id
            );
            return matchingBook ? matchingBook : incomingBook;
          });
          setResults([...finalResult]);
        } else {
          setResults([]);
        }
      });
    }
  }, [debouncedSearchTerm, books]);

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleSearchBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="header">
        <ArrowBackIcon
          width={50}
          height={50}
          style={{ cursor: "pointer" }}
          onClick={handleBackToHome}
        />
        <h3>Back to Home</h3>
      </div>
      <div className="search-input">
        <SearchBar value={searchValue} onChange={handleSearchBook} />
      </div>
      <div className="search-result">
        {results.length > 0 ? (
          results?.map((result) => <Book key={result.id} {...result} />)
        ) : (
          <h3>Seems like there's nothing to show</h3>
        )}
      </div>
    </div>
  );
};
