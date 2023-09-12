import WithLabel from '@/components/with-label';
import { cn } from '@/lib/utils';

export default function TextField({
  value,
  placeholder,
  label,
  className,
  withLabelClassName,
  inputClassName,
  ...props
}) {
  return (
    <WithLabel label={label} className={cn('w-full', withLabelClassName)}>
      <div className={cn('w-full', className)}>
        <div className="relative rounded-lg shadow-sm w-full">
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            {...props}
            className={cn(
              'block w-full h-[3rem] px-4 py-[.5rem] rounded-lg border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
              inputClassName
            )}
          />
        </div>
      </div>
    </WithLabel>
  );
}
