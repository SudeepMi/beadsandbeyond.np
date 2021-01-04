import React, { Suspense } from "react";
import "./style.css";

// constants demo
import { topSales } from "../../Utils/ProductDetails";

// components
const Navbar = React.lazy(() => import("../../Components/Navbar"));
const Landing = React.lazy(() => import("../../Components/Home/Landing"));
const ProductCard = React.lazy(() =>
  import("../../Components/Home/ProductCard")
);

const index = () => {
  return (
    <div className="home">
      {/* 1. Navbar */}
      <Suspense fallback={<div>Nav Loading...</div>}>
        <Navbar />
      </Suspense>

      <div className="scrollableHome">
        {/* 2. Landing */}
        <Suspense fallback={<div>This is Landing...</div>}>
          <Landing />
        </Suspense>

        {/* 3. Top Sales */}
        <h3 style={{ fontWeight: "700" }}>TOP SALES</h3>
        <div className="topSales">
          {topSales.map((item, index) => (
            <ProductCard key={index} productInfo={item} />
          ))}
        </div>

        <hr />

        {/* 4. Recent Items */}
        <h3 style={{ fontWeight: "700" }}>RECENT ITEMS</h3>
        <div className="recentItems">
          {topSales.map((item, index) => (
            <ProductCard key={index} productInfo={item} />
          ))}
        </div>

        {/* 5. ad */}
        <div className="homeAd">
        </div>  
      </div>
    </div>
  );
};

export default index;
