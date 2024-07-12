import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { Book } from "../../models";
import { update, getAll } from "../../api";

interface AuthContextType {
  books: Book[] | null;
  getAllBooks: () => void;
  moveBook: (bookId: string, destination: string) => void;
  updateBook: (book: Book, shelf: string) => void;
}

const BookContext = createContext<AuthContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[] | null>(null);

  const getAllBooks = useCallback(() => {
    getAll().then((response) => setBooks(response));
  }, []);

  const moveBook = (bookId: string, destination: string) => {
    setBooks((prev) => {
      if (prev !== null) {
        const cloneBooks = [...prev];
        const targetBookPosition = cloneBooks.findIndex(
          (book) => book.id === bookId
        );
        if (targetBookPosition > -1) {
          cloneBooks[targetBookPosition].shelf = destination;
        }
        return cloneBooks;
      }
      return null;
    });
  };

  const updateBook = (book: Book, shelf: string) => {
    update(book, shelf).then(() => getAllBooks());
  };

  return (
    <BookContext.Provider value={{ books, getAllBooks, moveBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBook must be used within an BookProvider");
  }
  return context;
};
