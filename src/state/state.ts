import { TNewUser, TNotification } from './../common/types/types';
import { InMemoryCache, makeVar, useReactiveVar } from "@apollo/client";
import { TUser } from "../common/types/types";

export const RoleVariants = ['ANT', 'ANT_MANAGER', 'ANT_OFFICER', 'DEVELOPER']

export const workBordersVariants = [
  { id: '1', name: 'Белгатой'},
  { id: '2', name: 'Шали'},
  { id: '3', name: 'Урус-Мартан' }
]

export const notificationStyles = {
  ERROR: 'error', 
  SUCCESS: 'success',
}

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

export const notificationsVar = makeVar<TNotification[]>([]);

export const showNotification = (text: TNotification['text'], style: TNotification['style']) =>  {
  const key = Math.random().toString()
  const nItem = {key, text , style}
  notificationsVar([...notificationsVar(), nItem])
  setTimeout(() => hideNotification(key), 3000);
}

export const hideNotification = (key: TNotification['key']) =>  {
  const notifications = notificationsVar().filter(n => n.key !== key)
  notificationsVar(notifications)
}


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

  return users
}

export const getUser = (username: string) => {
  return useReactiveVar(usersVar).find(u => u.username === username)
}

export const createUser = (user: TNewUser) => {

  const {username, firstName, lastName, roles, workBorders}  = user
  const users = [{username, firstName, lastName, roles, workBorders}, ...usersVar()]
  saveUsers(users)
  usersVar(users)
}

export const updateUser = (user: TNewUser) => {

  const {username, firstName, lastName, roles, workBorders} = user
  const newUsers = usersVar().map(u => u.username !== user.username ? u : {...u, username, firstName, lastName, roles, workBorders})
  saveUsers(newUsers)
  usersVar([...newUsers])
}