import { ChangeEventHandler, FocusEventHandler } from "react";
import { InputFieldsPropsType } from "@/form-handler/types/formTypes";
export type InputsProps = {
    item: InputFieldsPropsType;
    value: string
    errorMessage: string | undefined
    handleBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export default function Inputs({ item, value, errorMessage, handleBlur, handleChange }: InputsProps) {
    return (
        <div
            className={` min-h-24 w-full ${item.type === "textarea" ? "lg:col-span-2 sm:col-span-2 col-span-1" : ""}`}
        >
            <label className="block text-[#7B7A7F] mb-1">{item.label}</label>
            {item.type === "textarea" ? (
                <div className="mt-4 col-span-2 w-full">
                    <textarea
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={value}
                        name={item.id}
                        placeholder={item.placeholder}
                        className="w-full px-3 py-2 border border-[#28272D] rounded-md outline-none custom-input"
                        rows={4}
                    />
                </div>
            ) : (
                <input
                    id={item.id}
                    type={item.type}
                    name={item.id}
                    value={value}
                    maxLength={item.maxLength}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={item.placeholder}
                    className="w-full px-3 py-2  border border-[#28272D]  rounded-md outline-none custom-input"
                />
            )}

            <p className="text-xs text-red-700 max-w-xs p-2 text-wrap ">{errorMessage}</p>
        </div>
    );
}
