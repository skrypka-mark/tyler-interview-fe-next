import WithLabel from "@/components/with-label";

export default function TextField({
  value,
  placeholder,
  label,
  className,
  withLabelClassName,
  ...props
}) {
  return (
    <WithLabel label={label} className={withLabelClassName}>
      <div className={className}>
        <div className="relative rounded-lg shadow-sm">
          <div>
              <input
                type="text"
                value={value}
                placeholder={placeholder}
                { ...props }
                className="block w-full pt-3 pb-3 rounded-lg border-0 py-1.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>                    
        </div>
      </div>
    </WithLabel>
  )
}
