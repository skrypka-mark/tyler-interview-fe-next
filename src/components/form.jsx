import cn from "classnames";
import Button from "@/components/button";

export default function Form({
    title,
    header,
    isSeparator,
    isFirst,
    isLast,
    children,
    className,
    onSubmit,
    goBack,
    goNext
}) {
    const renderTitle = () => (
        <h2 className="text-xl font-semibold p-8">{title}</h2>
    );
    const renderHeader = () => (
        <header className="p-8">
            {header}
        </header>
    );

    const submitFormHandler = e => {
        e.preventDefault();
        onSubmit && onSubmit();
    };
    return (
        <section className="flex flex-col w-full h-full">
            <form className="flex flex-col w-full h-full" onSubmit={submitFormHandler}>
                { title && renderTitle() }
                { header && renderHeader() }
                { isSeparator && <div className="w-full border-t-2" /> }
                <main className={cn("basis-0 min-h-[90%] p-8 overflow-auto", className)}>
                    {children}
                </main>
            </form>
            <footer className="flex gap-x-4 mt-auto ml-auto p-8">
                { isFirst ? null : <Button variant='secondary' onClick={goBack}>Back</Button> }
                { isLast ? null : <Button variant='primary' onClick={goNext}>Continue</Button> }
            </footer>
        </section>
    )
}
