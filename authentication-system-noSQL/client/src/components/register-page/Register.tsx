'use client'
import Button from "../reuseable/Button"
import { registerFieldValidationConfig } from "./config/register.config"
import { registerInputsConfig } from "./config/register.config"
import Inputs from "../reuseable/Inputs"
import useFormHandler from "../../form-handler/hooks/useFormHandler"
import { ToastContainer, toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { internalNetworkCall } from "@/utils/axios"
import { inputInitialValue, IntialValueTypeKeys } from "./config/register.config"
export default function Register() {
    const router = useRouter()
    const formik = useFormHandler(inputInitialValue, registerFieldValidationConfig, async (formData) => {
        try {
            const response = await internalNetworkCall.post('/api/register', formData)
            toast.success(response.data.message)
            router.push('/dashboard')
        }
        catch (err) {
            const error = err as { response?: { data?: { message: string } } }
            toast.error(error.response?.data?.message)
        }
    })

    return (
        <>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit} >
                <div className="space-y-1">
                    {registerInputsConfig.map((item, key) => {
                        const errorMessage = formik.touched[item.id as IntialValueTypeKeys] ? formik.errors[item.id as IntialValueTypeKeys] : ''
                        const value = formik.values[item.id as IntialValueTypeKeys]
                        return (
                            <div key={item.id}>
                                <Inputs
                                    key={key}
                                    errorMessage={errorMessage}
                                    value={value}
                                    handleBlur={formik.handleBlur}
                                    handleChange={formik.handleChange}
                                    item={item} />
                            </div>
                        )
                    })}
                </div>
                <Button isSubmitting={formik.isSubmitting} label="SIGN UP" />
            </form>
        </>
    )
}