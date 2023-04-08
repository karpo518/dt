import React from "react";
import "./App.scss";
import { Header } from "./components/layout/header/Header";
import { Footer } from "./components/layout/footer/Footer";
import { routes } from "./common/routes";
import {
  BrowserRouter,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <article>
        <Outlet />
      </article>
      <Footer />
    </div>
  );
}

export default App;
