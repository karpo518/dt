import { TNewUser, ValueOf } from './../common/types/types';
import { makeVar } from "@apollo/client";
import { TUser } from "../common/types/types";

export const RoleVariants = ['ANT', 'ANT_MANAGER', 'ANT_OFFICER', 'DEVELOPER']

export const workBordersVariants = [
  { id: '1', name: 'Белгатой'},
  { id: '2', name: 'Шали'},
  { id: '3', name: 'Урус-Мартан' }
]

export const initialUsers: TUser[] = [
  {
    username: 'vasya1985',
    firstName: 'Василий',
    lastName: 'Теркин',
    roles: ['ANT'],
    workBorders: ['1']
  },
  {
    username: 'velikolepnaya_m',
    firstName: 'Мария',
    lastName: 'Попова',
    roles: ['ANT', 'ANT_MANAGER'],
    workBorders: ['1', '2', '3']
  },
  {
    username: 'petruska_one',
    firstName: 'Петр',
    lastName: 'Гаврилов',
    roles: ['ANT', 'ANT_MANAGER', 'ANT_OFFICER'],
    workBorders: ['2', '3']
  },
]


export const usersVar = makeVar<TUser[]>([]);

export const saveUsers = (users: TUser[]) => {
  localStorage.users = JSON.stringify(users);
}

export const loadUsers = () => {
  
  let users: TUser[]

  console.log(localStorage.users)
  
  if(localStorage.users) {
    users = JSON.parse(localStorage.users)
  }
  else {
    users = initialUsers
    saveUsers(users)
  }
  
  usersVar(users)
}

export const createUser = (user: TNewUser) => {

  const {username, firstName, lastName, roles, workBorders}  = user
  const users = [...usersVar(), {username, firstName, lastName, roles, workBorders}]
  saveUsers(users)
  usersVar(users)
}