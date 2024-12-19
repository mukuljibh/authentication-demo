
import * as Yup from "yup"

import { InputFieldValidationType } from "@/form-handler/types/formTypes";


export function generateValidationSchema<A extends InputFieldValidationType>(config: A[]) {
    const schema: Record<string, Yup.StringSchema> = {}
    config.forEach((field) => {
        let fieldValidation = Yup.string();
        if (field?.required) {
            fieldValidation = fieldValidation.required("Required");
        }

        if (field?.noSpaces) {
            fieldValidation = fieldValidation.matches(/^\S*$/, field?.message);
        }

        if (field?.pattern) {
            fieldValidation = fieldValidation.matches(field.pattern, field?.message || `Invalid ${field.id}`);
        }
        if (field?.ref) {
            fieldValidation = fieldValidation.oneOf([Yup.ref(field.ref as string)], field?.message)
        }

        schema[field.id] = fieldValidation;
    })
    return Yup.object(schema)
}


export default function generateIntialValue<TInput>(config: InputFieldValidationType[]) {
    const initialValues: Record<string, string> = {};
    config.forEach((field) => {
        initialValues[field.id] = "";
    });
    return initialValues as TInput;
}

