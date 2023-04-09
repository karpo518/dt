import { useReactiveVar } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import { usersVar } from "../../../../state/state";
import { UserPreview } from "../../../widgets/users/userPreview/UserPreview";
import s from "./UserListPage.module.scss";
import { Form } from "react-bootstrap";



export const UserListPage = () => {
  
  const [search, setSearch] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  let users = useReactiveVar(usersVar)

  if(search.length) {
    users = users.filter(u => u.username.includes(search));
  }
  
  const userList = users.map((u) => <UserPreview key={u.username} {...u} />)

  return (
    <div className={s.wrapper}>
      <h1>Пользователи</h1>
      <Form.Control className={s.searchField} type="text" placeholder="Введите имя пользователя..." onChange={handleChange} value={search} />
      <div className={s.userList}>{userList}</div>
    </div>
  );
};
