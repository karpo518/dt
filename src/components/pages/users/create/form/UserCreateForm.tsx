import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import s from "./UserCreateForm.module.scss";
import { TNewUser } from '../../../../../common/types/types';
import { CustomSelect } from '../../../../widgets/forms/CustomSelect';
import { getNewUserFromSchema } from './UserCreateFormValidation';
import cn from 'clsx'


export const Roles = ['ANT', 'ANT_MANAGER', 'ANT_OFFICER', 'DEVELOPER']

const RoleOptions = Roles.map(r => { return {label: r, value: r} })

export const workBorders = [
  { id: '1', name: 'Белгатой'},
  { id: '2', name: 'Шали'},
  { id: '3', name: 'Урус-Мартан' }
]

const workBordersOptions = workBorders.map(wb => { return {label: wb.name, value: wb.id} })

const workBordersValues = workBorders.map(wb => wb.id )

const newUserFormSchema = getNewUserFromSchema(Roles, workBordersValues)


const initialValues: TNewUser = {
  username: '',
  password: '',
  passwordRepeat: '',
  firstName: '',
  lastName: '',
  roles: [Roles[0]],
  workBorders: []
}

export const UserCreateForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newUserFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={s.wrapper}>

          <div className={s.formItem} >
            <label htmlFor={'username'} >Имя пользователя</label>
            <Field type="text" name="username" className={s.simple} />
            <ErrorMessage className={s.error} name="username" component="div" />
          </div>

          <div className={s.formItem} >
            <label htmlFor={'password'} >Пароль</label>
            <Field type="password" name="password" className={s.simple} />
            <ErrorMessage className={s.error} name="password" component="div" />
          </div>

          <div className={s.formItem} >
            <label htmlFor={'passwordRepeat'} >Повторите пароль</label>
            <Field type="password" name="passwordRepeat" className={s.simple} />
            <ErrorMessage className={s.error} name="passwordRepeat" component="div" />
          </div>

          <div className={s.formItem} >
            <label htmlFor={'firstName'} >Имя</label>
            <Field type="text" name="firstName" className={s.simple} />
            <ErrorMessage className={s.error} name="firstName" component="div" />
          </div>

          <div className={s.formItem} >
            <label htmlFor={'lastName'} >Фамилия</label>
            <Field type="text" name="lastName" className={s.simple} />
            <ErrorMessage className={s.error} name="lastName" component="div" />
          </div>

          <div className={s.formItem} >
            <label htmlFor={'lastName'} >Роли</label>
            <Field component={CustomSelect} name="roles" options={RoleOptions} isMulti={true} />
            <ErrorMessage className={s.error} name="roles" component="div" />
          </div>

          <div className={s.formItem} >
            <label htmlFor={'workBorders'} >Work Borders</label>
            <Field component={CustomSelect} name="workBorders" options={workBordersOptions} isMulti={true} />
            <ErrorMessage className={s.error} name="workBorders" component="div" />
          </div>

          <button type="submit" disabled={isSubmitting} className={cn('btn', 'btn-light', s.button)} >
            Отправить
          </button>
        </Form>
      )}
    </Formik>
  )
}