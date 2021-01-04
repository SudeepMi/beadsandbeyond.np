import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
const Home = React.lazy(() => import("./Pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* fallback should be of exact components shapes */}
        <Route
          exact
          path="/"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
