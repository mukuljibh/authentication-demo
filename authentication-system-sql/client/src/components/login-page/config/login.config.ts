import { InputFieldValidationType, InputFieldsPropsType } from "@/form-handler/types/formTypes"
import { emailRegix } from "@/utils/validationRegix"


export const inputInitialValue = {
    username: "",
    email: "",
    password: "",
    captcha: ""
}
export type InitialValueTypeKeys = keyof typeof inputInitialValue

export const loginFieldValidationConfig: InputFieldValidationType[] = [
    { id: "username", required: true },
    { id: "email", required: true, pattern: emailRegix, message: "Enter valid email" },
    { id: "password", required: true },
    { id: "captcha", required: true }
]


export const loginInputsConfig: InputFieldsPropsType[] = [
    { id: "username", label: "Username", type: "text", placeholder: "Enter your username" },
    { id: "email", label: "Email", type: "text", placeholder: "Enter your email" },
    { id: "password", label: "Password", type: "password", placeholder: "Enter your password" },
]



