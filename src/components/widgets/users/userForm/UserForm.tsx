import cn from "clsx";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { TNewUser } from "../../../../common/types/types";
import { CustomSelect } from "../../forms/CustomSelect";
import s from "./UserForm.module.scss";
import { getUserFormSchema } from "./UserFormValidation";
import {
  RoleVariants,
  createUser,
  notificationStyles,
  showNotification,
  updateUser,
  workBordersVariants,
} from "../../../../state/state";
import { Loading } from "../../../layout/loading/Loading";

const RoleOptions = RoleVariants.map((r) => {
  return { label: r, value: r };
});
const workBordersOptions = workBordersVariants.map((wb) => {
  return { label: wb.name, value: wb.id };
});

const workBordersValues = workBordersVariants.map((wb) => wb.id);

const UserFormSchema = getUserFormSchema(RoleVariants, workBordersValues);

const defaultValues: TNewUser = {
  username: "",
  password: "",
  passwordRepeat: "",
  firstName: "",
  lastName: "",
  roles: [RoleVariants[0]],
  workBorders: [],
};

type TProps = {
  values: Partial<TNewUser>;
  isNewUser: boolean;
};

export const UserForm: FC<TProps> = ({ values, isNewUser }) => {
  const initialValues = { ...defaultValues, ...values };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={UserFormSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          let successMessage = "";

          if (isNewUser) {
            createUser(values);
            successMessage = `Пользователь ${values.username} успешно добавлен`;
          } else {
            updateUser(values);
            successMessage = `Пользователь ${values.username} успешно обновлён`;
          }

          console.log(successMessage);
          showNotification(successMessage, notificationStyles.SUCCESS);
          resetForm();
          setSubmitting(false);
        }, 3000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.wrapper}>
          {isSubmitting && <Loading />}

          {isNewUser ? (
            <div className={s.formItem}>
              <label htmlFor={"username"}>Имя пользователя</label>
              <Field
                type={isNewUser ? "text" : "hidden"}
                name="username"
                className={s.simple}
              />
              <ErrorMessage
                className={s.error}
                name="username"
                component="div"
              />
            </div>
          ) : (
            <div className={s.formItem}>
              <div className={s.usernameText}>
                Пользователь: <span className={s.value}>{values.username}</span>
              </div>
              <Field type={"hidden"} name="username" className={s.simple} />
            </div>
          )}

          <div className={s.formItem}>
            <label htmlFor={"password"}>Пароль</label>
            <Field type="password" name="password" className={s.simple} />
            <ErrorMessage className={s.error} name="password" component="div" />
          </div>

          <div className={s.formItem}>
            <label htmlFor={"passwordRepeat"}>Повторите пароль</label>
            <Field type="password" name="passwordRepeat" className={s.simple} />
            <ErrorMessage
              className={s.error}
              name="passwordRepeat"
              component="div"
            />
          </div>

          <div className={s.formItem}>
            <label htmlFor={"firstName"}>Имя</label>
            <Field type="text" name="firstName" className={s.simple} />
            <ErrorMessage
              className={s.error}
              name="firstName"
              component="div"
            />
          </div>

          <div className={s.formItem}>
            <label htmlFor={"lastName"}>Фамилия</label>
            <Field type="text" name="lastName" className={s.simple} />
            <ErrorMessage className={s.error} name="lastName" component="div" />
          </div>

          <div className={s.formItem}>
            <label htmlFor={"lastName"}>Роли</label>
            <Field
              component={CustomSelect}
              name="roles"
              options={RoleOptions}
              isMulti={true}
            />
            <ErrorMessage className={s.error} name="roles" component="div" />
          </div>

          <div className={s.formItem}>
            <label htmlFor={"workBorders"}>Work Borders</label>
            <Field
              component={CustomSelect}
              name="workBorders"
              options={workBordersOptions}
              isMulti={true}
            />
            <ErrorMessage
              className={s.error}
              name="workBorders"
              component="div"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn("btn", "btn-light", s.button)}
          >
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  );
};
