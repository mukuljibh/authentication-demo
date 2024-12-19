export type InputFieldValidationType = {
    id: string;
    required?: boolean;
    spaces?: boolean;
    pattern?: RegExp;
    message?: string;
    noSpaces?: boolean;
    ref?: string;
}

export type InputFieldsPropsType = {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    size?: number;
}