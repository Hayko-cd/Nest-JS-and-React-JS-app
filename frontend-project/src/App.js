import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WebsiteRoutes } from "routes/routes.js";


export const App = () => {
  return (
    <Router>
        <Routes>
          {WebsiteRoutes.map((item) => (
              <Route key={item.path} element={item.component} path={item.path} name={item.name} />
            )
          )}
        </Routes>
    </Router>
  );
}
