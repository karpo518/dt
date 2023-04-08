import React, { useEffect } from "react";
import s from "./UserListPage.module.scss";
import { UserPreview } from "../../../widgets/users/UserPreview";
import { useReactiveVar } from "@apollo/client";
import { initialUsers, usersVar } from "../../../../state/state";



export const UserListPage = () => {
  
  const users = useReactiveVar(usersVar);
  
  const userList = users.map((u) => <UserPreview key={u.username} {...u} />)
  
  useEffect(() => {
    usersVar(initialUsers)
  }, []);


  return (
    <div className={s.wrapper}>
      <h1>Пользователи</h1>
      <div className={s.userList}>{userList}</div>
    </div>
  );
};
