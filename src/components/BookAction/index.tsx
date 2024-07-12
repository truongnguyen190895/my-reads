import "./bookAction.style.scss";

interface BookActionProps {
  activeShelf: string;
  onBookUpdate: (destination: string) => void;
}

const STATUS = [
  { label: "Currently Reading", value: "currentlyReading" },
  { label: "Want to read", value: "wantToRead" },
  { label: "Read", value: "read" },
];

export const BookAction = ({ activeShelf, onBookUpdate }: BookActionProps) => {
  const handleSelectAction = (destinationShelf: string) => {
    onBookUpdate(destinationShelf);
  };

  return (
    <div className="book-actions-container">
      <p>Move to...</p>
      {STATUS.map((status) => (
        <p
          key={status.label}
          className={activeShelf === status.value ? "active" : ""}
          onClick={() => handleSelectAction(status.value)}
        >
          {status.label}
        </p>
      ))}
    </div>
  );
};
