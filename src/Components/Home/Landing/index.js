import React, { useState, useEffect } from "react";
import "./style.css";

const Landing = () => {
  // loading the lazy image
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 2000);
  }, []);

  return (
    <div className="landing">
      <div className={isLoaded ? "landing-full" : "landing-tiny"}></div>
    </div>
  );
};

export default Landing;
