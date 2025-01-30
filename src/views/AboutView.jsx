import React from "react";
import { useResumeController } from "../controllers/ResumeController";
import InfoCards from "../components/InfoCards/InfoCards";

const AboutView = () => {
  const { data } = useResumeController();

  return (
    <div className="app">
      <div className="container">
        <InfoCards />
      </div>
    </div>
  );
};

export default AboutView; 