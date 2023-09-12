import { cn } from '@/lib/utils';

export default function Tabs({ tabs, selected, onTabClick }) {
  return (
    <ul className="flex gap-x-8 -mb-[1px]">
      {tabs?.map(({ value, label }) => (
        <li key={value}>
          <button
            className={cn('py-[.5rem] transition', {
              'border-b-2 border-[#28AEAE] text-[#005252]': value === selected,
              'hover:border-b-2 hover:border-[#28AEAE] text-[#C0CBDA] hover:text-[#005252]': value !== selected
            })}
            onClick={() => onTabClick(value)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}
