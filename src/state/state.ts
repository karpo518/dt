import { makeVar } from "@apollo/client";
import { TUser } from "../common/types/types";

export const initialUsers: TUser[] = [
  {
    username: 'vasya1985',
    firstName: 'Василий',
    lastName: 'Теркин',
    roles: ['ANT'],
    workBorders: [{ id: 1, name: 'Белгатой' }]
  },
  {
    username: 'velikolepnaya_m',
    firstName: 'Мария',
    lastName: 'Попова',
    roles: ['ANT', 'ANT_MANAGER'],
    workBorders: [{ id: 1, name: 'Белгатой' }, { id: 2, name: 'Шали' }, { id: 3, name: 'Урус-Мартан' }]
  },
  {
    username: 'petruska_one',
    firstName: 'Петр',
    lastName: 'Гаврилов',
    roles: ['ANT', 'ANT_MANAGER', 'ANT_OFFICER'],
    workBorders: [{ id: 2, name: 'Шали' }, { id: 3, name: 'Урус-Мартан' }]
  },
]

export const usersVar = makeVar<TUser[]>([]);

