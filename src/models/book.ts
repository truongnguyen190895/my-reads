export interface Book {
  authors: string[];
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  shelf: string;
  title: string;
}
