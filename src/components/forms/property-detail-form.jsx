import { useContext, useMemo } from 'react';
import { FormContext } from '@/context/form-context';
import Form from '@/components/form';
import TextFiled from '@/components/text-field';
import SelectField from '@/components/select-field';

const countryOptions = [
  { value: 'united_kingdom', label: 'United Kingdom' },
  { value: 'canada', label: 'Canada' },
  { value: 'ukraine', label: 'Ukraine' },
  { value: 'france', label: 'France' },
  { value: 'germany', label: 'Germany' }
];
const cityOptions = [
  { value: 'london', label: 'London' },
  { value: 'Kyiv', label: 'Kyiv' },
  { value: 'kharkiv', label: 'Kharkiv' },
  { value: 'paris', label: 'Paris' },
  { value: 'munich', label: 'Munich' }
];

export default function PropertyDetailForm({ goNext }) {
  const { propertyDetailFormData, setPropertyDetailFormData } = useContext(FormContext);

  const isFromValid = useMemo(
    () => !Object.values(propertyDetailFormData).some((filed) => !filed),
    [propertyDetailFormData]
  );

  const inputChangeHandler = ({ target }) => {
    setPropertyDetailFormData((state) => ({
      ...state,
      [target.name]: target.value
    }));
  };

  const goNextClickHandler = () => {
    if (isFromValid) {
      goNext();
    }
  };
  return (
    <Form title="Property details" className="flex flex-col gap-y-[1.5rem]" isFirst goNext={goNextClickHandler}>
      <h4 className="text-md font-500">Property Detail</h4>

      <TextFiled
        name="propertyName"
        value={propertyDetailFormData.propertyName}
        placeholder="Property name"
        label="Storage A"
        onChange={inputChangeHandler}
      />
      <TextFiled
        name="address"
        value={propertyDetailFormData.address}
        placeholder="1373 5th Avenue, Falher, Alberta T0H 1M0"
        label="Address line"
        onChange={inputChangeHandler}
      />

      <div className="flex gap-x-4 w-full">
        <SelectField
          name="country"
          label="Country"
          options={countryOptions}
          selected={propertyDetailFormData.country}
          className='w-full'
          withLabelClassName='w-full'
          onChange={inputChangeHandler}
        />
        <SelectField
          name="city"
          label="City"
          options={cityOptions}
          selected={propertyDetailFormData.city}
          className='w-full'
          withLabelClassName='w-full'
          onChange={inputChangeHandler}
        />
        <TextFiled
          name="zip"
          value={propertyDetailFormData.zip}
          placeholder="SE1 1AB"
          label="ZIP/Postal Code"
          withLabelClassName='w-[200px]'
          className='w-[200px]'
          onChange={inputChangeHandler}
        />
      </div>

      <TextFiled
        name="closeDate"
        type="date"
        value={propertyDetailFormData.closeDate}
        label="Close Date"
        onChange={inputChangeHandler}
      />
    </Form>
  );
}
