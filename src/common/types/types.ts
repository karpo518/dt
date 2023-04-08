export type TNewUser = TUser & {password: string}

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

