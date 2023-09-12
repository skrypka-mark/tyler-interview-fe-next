import cn from 'classnames';

export default function WithLabel({ label, className, children }) {
  return !label ? (
    children
  ) : (
    <label className={cn('flex flex-col gap-y-1 w-fit', className)}>
      <span className="text-xs font-semibold text-[#171F2D]">{label}</span>
      {children}
    </label>
  );
}
