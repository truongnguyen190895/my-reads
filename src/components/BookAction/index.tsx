import "./bookAction.style.scss";

interface BookActionProps {
  activeStatus: number;
  onBookUpdate: (destination: number) => void;
}

const STATUS = [
  { label: "Currently Reading", value: 1 },
  { label: "Want to read", value: 2 },
  { label: "Read", value: 3 },
  { label: "None", value: 0 },
];

export const BookAction = ({ activeStatus, onBookUpdate }: BookActionProps) => {
  const handleSelectAction = (actionNumber: number) => {
    if (actionNumber !== activeStatus) {
      onBookUpdate(actionNumber);
    }
  };

  return (
    <div className="book-actions-container">
      <p>Move to...</p>
      {STATUS.map((status) => (
        <p
          key={status.label}
          className={activeStatus === status.value ? "active" : ""}
          onClick={() => handleSelectAction(status.value)}
        >
          {status.label}
        </p>
      ))}
    </div>
  );
};
