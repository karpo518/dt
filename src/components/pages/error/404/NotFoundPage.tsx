import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Страница не найдена!</h1>
      <p>
        Измените URL или перейдите на главную страницу{" "}
        <Link to={process.env.PUBLIC_URL || '/'}>главную страницу</Link>.
      </p>
    </div>
  );
};
