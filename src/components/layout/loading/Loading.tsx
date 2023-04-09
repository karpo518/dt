import React from "react";
import s from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div>
      <div className={s.lds}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
