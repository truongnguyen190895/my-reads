import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "../../components";
import "./search.style.scss";

export const Search = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="search-container">
      <div className="header">
        <ArrowBackIcon
          width={80}
          height={80}
          style={{ cursor: "pointer" }}
          onClick={handleBackToHome}
        />
        <h3>Back to Home</h3>
      </div>
      <h1>Search Page</h1>
    </div>
  );
};
