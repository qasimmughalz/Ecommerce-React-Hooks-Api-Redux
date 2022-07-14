import react from "react";
import "./Home.css";

export const HeroSection = ({ children }) => {
  return (
    <div className="secondary-hero">
      <div className="gradient-bottom-others"></div>

      {children}
    </div>
  );
};
