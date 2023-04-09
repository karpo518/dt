import React from "react";
import s from "./UserCreatePage.module.scss";
import { UserCreateForm } from "./form/UserCreateForm";


export const UserCreatePage = () => {
  return (
    <div className={s.wrapper}>
      <h1>Добавить пользователя</h1>
      <UserCreateForm />
    </div>
  );
};
