import cn from 'classnames';

export default function SelectButtonGroup({
  id,
  options,
  selected,
  onClick,
  ...props
}) {
  return (
    <ul className="flex w-fit border rounded-lg overflow-hidden" {...props}>
      {options?.map((option, index) => (
        <li key={option} className="flex w-[10.25rem]">
          <div
            id={id}
            role="button"
            className={cn(
              'flex items-center justify-center w-full px-[3em] py-[.8em] hover:bg-slate-100 text-gray-500 transition cursor-pointer whitespace-nowrap',
              { 'bg-slate-100 text-gray-900': selected === option }
            )}
            onClick={onClick(option)}
          >
            <h4 className="text-sm font-medium capitalize pointer-events-none">
              {option}
            </h4>
          </div>
          {index + 1 !== options.lenght && (
            <div className="h-full border-l-[1px]" />
          )}
        </li>
      ))}
    </ul>
  );
}
