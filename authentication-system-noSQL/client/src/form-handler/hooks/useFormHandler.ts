import { useFormik } from "formik";
import { InputFieldValidationType } from "@/form-handler/types/formTypes";
import { generateValidationSchema } from "../utils/formUtils";



export default function useFormHandler<TInput>(
    inputInitialValue: TInput,
    config: InputFieldValidationType[],
    action: (formData: TInput) => Promise<void>,
    overriddenInitialValues?: Partial<TInput>
) {
    const formValidationSchema = generateValidationSchema(config)

    const formik = useFormik({
        initialValues: { ...inputInitialValue, ...overriddenInitialValues },
        validationSchema: formValidationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            await action(values)
            setSubmitting(false);
        }
    })
    return formik
}

