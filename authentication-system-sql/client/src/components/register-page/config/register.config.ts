import { InputFieldValidationType, InputFieldsPropsType } from "@/form-handler/types/formTypes"
import { nameRegix, emailRegix, passwordRegix, usernameRegix } from "@/utils/validationRegix"


export const inputInitialValue = {
    name: "",
    username: "",
    email: "",
    address: "",
    password: "",
    confirmpassword: ""
}
export type IntialValueTypeKeys = keyof typeof inputInitialValue
export const registerFieldValidationConfig: InputFieldValidationType[] = [
    { id: "name", required: true, pattern: nameRegix, message: "Full name must be at least 3 character long" },
    { id: "email", required: true, pattern: emailRegix, message: "Enter valid email" },
    { id: "username", required: true, pattern: usernameRegix, message: "Username must be 3-16 characters long and contain only letters, numbers, or underscores." },
    { id: "address", required: true, },
    { id: "password", required: true, pattern: passwordRegix, message: "Password must be 8-15 characters, including an uppercase letter, lowercase letter, number, and special character (@.#$!%*?&)—no spaces." },
    { id: "confirmpassword", required: true, ref: "password", message: "password not match" },
]


export const registerInputsConfig: InputFieldsPropsType[] = [
    { label: "Full Name", id: "name", type: "text", placeholder: "Enter your full name" },
    { label: "Username", id: "username", type: "text", placeholder: "Enter your username" },
    { label: "Email", id: "email", type: "email", placeholder: "Email" },
    { label: "Address", id: "address", type: "textarea", placeholder: "Enter your full address" },
    { label: "Password", id: "password", type: "password", placeholder: "Enter your password" },
    { label: "Confirm Password", id: "confirmpassword", type: "password", placeholder: "Confirm your password" },
]
