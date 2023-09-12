import cn from 'classnames';

export default function Button({ variant, className, children, onClick }) {
  const variantStylesMapping = {
    primary: 'bg-[#002E2E] text-white hover:bg-teal-500',
    secondary: 'bg-transparent text-[#002E2E] hover:bg-slate-300',
    ternary: 'bg-transparent text-[#002E2E] hover:bg-slate-300 border border-[#DBE2ED]'
  };
  return (
    <button
      className={cn(
        'w-fit font-medium rounded-md px-[1em] py-[.75em] transition',
        { [variantStylesMapping[variant]]: !!variant },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
