import React from "react";
import { useResumeController } from "../controllers/ResumeController";
import Header from "../components/Header/Header";
import InfoCards from "../components/InfoCards/InfoCards";
import "../styles/globals.css";

const HomeView = () => {
  const { data } = useResumeController();

  return (
    <div className="app">
      <Header data={data} />
      <div className="container">
        <InfoCards />
      </div>
    </div>
  );
};

export default HomeView;