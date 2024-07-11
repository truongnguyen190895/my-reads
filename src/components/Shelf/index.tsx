import React from "react";
import "./shelf.style.scss";

interface ShelveProps {
  title: string;
}

export const Shelf = ({ title }: ShelveProps) => {
  return (
    <div className="shelve-container">
      <div className="shelve-title">
        <h3>{title}</h3>
      </div>
      <div className="book-container"></div>
    </div>
  );
};
