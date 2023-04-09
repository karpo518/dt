import * as Yup from 'yup';

export const getUserFormSchema = (roleValues: string[], workBordersValues: string[]) => {
  return Yup.object().shape({
    username: Yup.string()
      .min(3, 'Имя пользователя слишком короткое!')
      .required('Имя пользователя не заполнено!'),
    password: Yup.string()
      .min(4, 'Пароль слишком короткий!')
      .required('Пароль не заполнен!'),
    passwordRepeat: Yup.string()
      .required('Повтор пароля не заполнен!')
      .oneOf([Yup.ref('password')], 'Пароли не совпадают!'),
    firstName: Yup.string()
      .required('Имя не заполнено!')
      .min(2, 'Имя слишком короткое!'),
    lastName: Yup.string()
      .required('Фамилия не заполнена!'),
    roles: Yup.array().of(Yup.string().oneOf(roleValues)).min(1, 'Выберите хотя бы ${min} вариант'),
    workBorders: Yup.array().of(Yup.string().oneOf(workBordersValues)).min(1, 'Выберите хотя бы ${min} вариант'),
  })
}