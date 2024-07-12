export interface Book {
  id?: string;
  authors: string[];
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  shelf: string;
  title: string;
}
