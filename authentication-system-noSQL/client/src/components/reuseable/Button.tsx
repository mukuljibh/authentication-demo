type buttonProps = {
    label: string
    isSubmitting: boolean
}
export default function Button({ label, isSubmitting }: buttonProps) {
    return (
        <div className="space-y-5">
            <button type="submit"
                className={`h-11 w-80 text-white bg-amber-950 hover:bg-black ${isSubmitting && 'opacity-40  '}cursor-pointer`}
                disabled={isSubmitting}>
                {!isSubmitting ? label : `${label}...`}
            </button>
        </div>
    )
}