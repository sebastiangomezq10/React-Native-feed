import * as yup from 'yup'

export const loginValidationScheme = yup.object().shape({
    email: yup
        .string()
        .email()
        .required("El email es requerido"),
    password: yup
        .string()
        .min(5, 'too short')
        .max(50, 'too long')
        .required("La contraseña es requerida"),
})