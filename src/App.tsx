import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import { Footer } from "./components/layout/footer/Footer";
import { Header } from "./components/layout/header/Header";
import { loadUsers } from "./state/state";

function App() {

  useEffect(() => {
    loadUsers()
  }, []);

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
