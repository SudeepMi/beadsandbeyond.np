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
        <h2>Top Sales</h2>
        <div className="topSales">
          {topSales.map((item, index) => (
            <ProductCard key={index} productInfo={item} />
          ))}
        </div>

        {/* 4. Recent Items */}
        <h2>Recent Items</h2>
        <div className="recentItems">
          {topSales.map((item, index) => (
            <ProductCard key={index} productInfo={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
