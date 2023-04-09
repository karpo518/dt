import React from "react";
import { UserForm } from "../../../widgets/users/userForm/UserForm";
import s from "./UserUpdatePage.module.scss";
import { Notifier } from "../../../layout/notifier/Notifier";
import { useParams } from "react-router-dom";
import { getUser, usersVar } from "../../../../state/state";
import { NotFoundPage } from "../../error/404/NotFoundPage";
import { useReactiveVar } from "@apollo/client";

export const UserUpdatePage = () => {
  
  useReactiveVar(usersVar)

  const { username } = useParams();
  
  const user = username ? getUser(username) : undefined
  
  return (
    <div>
      {user ?
        (
          <div className={s.wrapper}>
            <h1>Изменить пользователя</h1>
            <Notifier />
            <UserForm isNewUser={false} values={user} />
          </div>
        )
        : <NotFoundPage />
      }
    </div>
  );
};
