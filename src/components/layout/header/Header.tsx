import React from "react";
import { Nav } from "react-bootstrap";
import s from "./Header.module.scss";
import cn from "clsx";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={s.slogan}>DTechs</div>
      <Nav className={s.menu} activeKey="/">
        <Nav.Item>
          <Link to="/" className={"nav-link"}>
            Пользователи
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="users/create" className={cn(s.button, "btn")}>
            Добавить
          </Link>
        </Nav.Item>
      </Nav>
    </header>
  );
};
