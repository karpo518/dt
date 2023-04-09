import React from "react";
import { UserForm } from "../../../widgets/users/userForm/UserForm";
import s from "./UserCreatePage.module.scss";
import { Notifier } from "../../../layout/notifier/Notifier";


export const UserCreatePage = () => {
  return (
    <div className={s.wrapper}>
      <h1>Добавить пользователя</h1>
      <Notifier />
      <UserForm  isNewUser={true} values={{}} />
    </div>
  );
};
