import { notificationStyles } from "../../state/state"

export type TState = { users: TUser[] }

export type TNewUser = TUser & {password: string, passwordRepeat: string}

export type TUser = {
  username: string,
  firstName: string,
  lastName: string,
  roles: string[],
  workBorders: string[]
}

type notificationStyle = ValueOf<typeof notificationStyles>

export type TNotification = { key: string, text: string, style: notificationStyle }

export type ValueOf<T> = T[keyof T];