import React from "react";
import s from "./UserListPage.module.scss";
import { TUser } from "../../../../common/types/types";
import { UserPreview } from "../../../widgets/users/UserPreview";

const users: TUser[] = [
	{
		username: 'vasya1985',
		firstName: 'Василий',
		lastName: 'Теркин',
		roles: ['ANT'],
		workBorders: [{id: 1, name: 'Белгатой'}]
	},
	{
		username: 'velikolepnaya_m',
		firstName: 'Мария',
		lastName: 'Попова',
		roles: ['ANT', 'ANT_MANAGER'],
		workBorders: [{id: 1, name: 'Белгатой'}, {id: 2, name: 'Шали'}, {id: 3, name: 'Урус-Мартан'}]
	},
	{
		username: 'petruska_one',
		firstName: 'Петр',
		lastName: 'Гаврилов',
		roles: ['ANT', 'ANT_MANAGER', 'ANT_OFFICER'],
		workBorders: [{id: 2, name: 'Шали'}, {id: 3, name: 'Урус-Мартан'}]
	},
]

export const UserListPage = () => {
  
  const userList = users.map((u) => <UserPreview key={u.username} {...u} />)
  
  return (
    <div className={s.wrapper}>
      <h1>Пользователи</h1>
      <div className={s.userList}>{userList}</div>
    </div>
  );
};
