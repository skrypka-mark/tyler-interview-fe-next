import cn from "classnames"

export default function Button({ variant, className, children, onClick }) {
    const variantStylesMapping = {
        primary: 'bg-[#002E2E] text-white hover:bg-teal-500',
        secondary: 'bg-transparent text-[#002E2E] hover:bg-slate-300'
    };
    return (
        <button
            className={cn(
                "w-fit font-medium rounded-md px-[1.5em] py-[.5em] transition",
                { [variantStylesMapping[variant]]: !!variant },
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
