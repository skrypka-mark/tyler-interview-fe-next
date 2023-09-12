import TextField from '@/components/text-field';

function TextFieldCurrency({ currencySymbol, ...props }) {
  return (
    <div className="flex items-end relative w-full">
      <TextField inputClassName="pl-8" type="number" step={10} {...props} />
      <span className="absolute left-[.75rem] mb-[.75rem]">{currencySymbol}</span>
    </div>
  );
}

TextFieldCurrency.defaultProps = {
  currencySymbol: '$'
};

export default TextFieldCurrency;
