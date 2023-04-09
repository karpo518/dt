import { useReactiveVar } from "@apollo/client";
import React from "react";
import { usersVar } from "../../../../state/state";
import { UserPreview } from "../../../widgets/users/userPreview/UserPreview";
import s from "./UserListPage.module.scss";



export const UserListPage = () => {
  
  const users = useReactiveVar(usersVar);
  
  const userList = users.map((u) => <UserPreview key={u.username} {...u} />)

  return (
    <div className={s.wrapper}>
      <h1>Пользователи</h1>
      <div className={s.userList}>{userList}</div>
    </div>
  );
};
