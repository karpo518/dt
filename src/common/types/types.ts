export type TState = { users: TUser[] }

export type TNewUser = TUser & {password: string, passwordRepeat: string}

export type TUser = {
  username: string,
  firstName: string,
  lastName: string,
  roles: string[],
  workBorders: TWorkBorder[]
}

type TWorkBorder = {
  id: number,
  name: string
}

export type ValueOf<T> = T[keyof T];