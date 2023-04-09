import React, { FC } from "react";
import cn from "clsx";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import s from "./UserPreview.module.scss";
import { TUser } from "../../../../common/types/types";
import { workBordersVariants } from "../../../../state/state";

type TProps = TUser;

export const UserPreview: FC<TProps> = ({
  username,
  firstName,
  lastName,
  roles,
  workBorders,
}) => {
  const roleList = roles.join(", ");
  const wBordersList = workBordersVariants
    .filter((w) => workBorders.includes(w.id))
    .map((w) => w.name)
    .join(", ");

  return (
    <Card className={s.wrapper}>
      <Card.Body>
        <Card.Title>{`${firstName} ${lastName}`}</Card.Title>
        <div className={s.username}>
          Имя пользователя: <span className={s.value}>{username}</span>
        </div>
        <div className={s.roles}>
          <span>Роли:</span> {roleList}
        </div>
        <div className={s.workBorders}>
          <span>Work borders:</span> {wBordersList}
        </div>
        <Link
          className={cn("btn", "btn-light", s.updateButton)}
          to={`/users/update/${username}`}
        >
          Редактировать
        </Link>
      </Card.Body>
    </Card>
  );
};
