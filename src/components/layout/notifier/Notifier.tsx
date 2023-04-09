import React from 'react'
import { notificationsVar } from '../../../state/state';
import { useReactiveVar } from '@apollo/client';
import cn from 'clsx';
import s from "./Notifier.module.scss";

export const Notifier = () => {
  
  const notifications = useReactiveVar(notificationsVar);

  const nItems = Object.values(notifications)

  const nList = nItems.map(n => <p key={n.key} className={cn(s.item, s[`item__${n.style}`])}>{n.text}</p>)
  
  return (
    <div className={s.wrapper}>{nList}</div>
  )
}
