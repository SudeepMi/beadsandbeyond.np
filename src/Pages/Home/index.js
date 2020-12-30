import React, { Suspense } from "react";
import "./style.css";

// components
const Navbar = React.lazy(() => import("../../Components/Navbar"));
const Landing = React.lazy(() => import("../../Components/Home/Landing"));

const index = () => {
  return (
    <div className="home">
      <Suspense fallback={<div>Nav Loading...</div>}>
        <Navbar />
      </Suspense>

      <div className="scrollableHome">
        <Suspense fallback={<div>This is Landing...</div>}>
          <Landing />
        </Suspense>
      </div>
    </div>
  );
};

export default index;
