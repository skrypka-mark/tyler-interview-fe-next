import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import WithLabel from '@/components/with-label';

export default function SelectField({ options, selected, label, className, withLabelClassName, ...props }) {
  return (
    <WithLabel label={label} className={`${withLabelClassName} max-lg:w-full`}>
      <div className={className}>
        <div className="w-full relative flex items-center rounded-lg shadow-sm">
          <select
            {...props}
            className="block w-full h-[3rem] px-4 py-[.5rem] appearance-none rounded-lg border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            {options.map((option) => (
              <option key={option} value={option.value} selected={selected}>
                {option.label}
              </option>
            ))}
          </select>
          <button className="absolute right-[.75rem] w-[20px] pointer-events-none">
            <ChevronUpDownIcon color="#171F2D" />
          </button>
        </div>
      </div>
    </WithLabel>
  );
}
