'use client'
import Button from "../reuseable/Button"
import { loginFieldValidationConfig, loginInputsConfig } from "./config/login.config"
import Inputs from "../reuseable/Inputs"
import useFormHandler from "../../form-handler/hooks/useFormHandler"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation"
import { internalNetworkCall } from "@/utils/axios"
import { inputInitialValue, InitialValueTypeKeys } from "./config/login.config"
import ReCAPTCHA from "react-google-recaptcha"


export default function Login() {
    const router = useRouter()
    const formik = useFormHandler(inputInitialValue, loginFieldValidationConfig, async (formData) => {
        try {
            const response = await internalNetworkCall.post('/api/login', formData)

            toast.success(response.data.message)
            router.push('/dashboard')
        }
        catch (err) {
            const error = err as { response?: { data?: { message: string } } }
            toast.error(error?.response?.data?.message || "Not able to make network call it might be CORS issues ")
        }
    })

    return (
        <>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit} >
                <div className="space-y-5">
                    {loginInputsConfig.map((item, key) => {
                        const value = formik.values[item.id as InitialValueTypeKeys]
                        const errorMessage = formik.touched[item.id as InitialValueTypeKeys] ? formik.errors[item.id as InitialValueTypeKeys] : ''
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
                <ReCAPTCHA onChange={(val) => formik.setFieldValue("captcha", val)} sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || ""} />
                <p className="text-xs text-red-700 mb-4">{formik.touched.captcha ? formik.errors.captcha : ''}</p>
                <Button isSubmitting={formik.isSubmitting} label="SIGN IN" />
            </form>
        </>

    )
}
