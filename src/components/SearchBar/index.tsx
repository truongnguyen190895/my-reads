import "./searchBar.style.scss";

interface SearchBarProps {
  label?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({
  label = "What are you looking for?",
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};
