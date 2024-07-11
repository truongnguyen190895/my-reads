import { useEffect } from "react";
import { Shelf } from "../../components";
import { getAll } from "../../api";
import "./home.style.scss";

export const Home = () => {
  useEffect(() => {
    getAll().then((response) => console.log("Get all ", response));
  }, []);
  return (
    <div className="home-page-container">
      <div className="header">
        <h2>My Reads</h2>
      </div>
      <div className="content">
        <Shelf title="Currently Reading" />
      </div>
    </div>
  );
};
