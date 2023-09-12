import { useContext, useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import { FormContext } from '@/context/form-context';
import Form from '@/components/form';
import TextField from '@/components/text-field';
import SelectButtonGroup from '@/components/select-button-group';
import WithLabel from '@/components/with-label';
import Button from '@/components/button';
import Tabs from '@/components/tabs';
import { cn } from '@/lib/utils';

const tabs = [
  { value: 'debt_1', label: 'Debt 1' },
  { value: 'add_debt', label: 'Add debt' }
];

export default function FinancingForm({ goNext, goBack }) {
  const { financingFormData, setFinancingFormData } = useContext(FormContext);
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const isFromValid = useMemo(() => !Object.values(financingFormData).some((filed) => !filed), [financingFormData]);

  const inputChangeHandler = ({ target }) => {
    setFinancingFormData((state) => ({
      ...state,
      [target.name]: target.value
    }));
  };
  const selectButtonClickHandler =
    (option) =>
    ({ target }) => {
      setFinancingFormData((state) => ({ ...state, [target.id]: option }));
    };

  const goNextClickHandler = () => {
    if (isFromValid) {
      goNext();
    }
  };
  return (
    <Form
      header={
        <header className="flex flex-col gap-y-[1.75rem] p-8 pb-0 border-b-[1px] border-b-[#DBE2ED]">
          <h2 className="text-xl font-semibold">Financing</h2>
          <Tabs tabs={tabs} selected={selectedTab} onTabClick={(value) => setSelectedTab(value)} />
        </header>
      }
      className="flex flex-col gap-y-[1.5rem]"
      goNext={goNextClickHandler}
      goBack={goBack}
    >
      <div className="flex gap-x-4 items-end w-[555px]">
        <TextField
          name="lender"
          value={financingFormData.lender}
          placeholder="ABC Capitals"
          label="Lender"
          onChange={inputChangeHandler}
        />
        <Button variant="ternary">
          <Icon icon="mdi:plus" fontSize="1.5rem" />
        </Button>
      </div>

      <div className="flex gap-x-4 w-[442px]">
        <div className="flex items-end relative">
          <TextField
            name="loanAmount"
            type="number"
            step={10}
            value={financingFormData.loanAmount}
            placeholder="5,000,000"
            label="Loan Amount"
            inputClassName="pl-8"
            onChange={inputChangeHandler}
          />
          <span className="absolute left-[.75rem] mb-[.75rem]">$</span>
        </div>
        <TextField
          name="startDate"
          type="date"
          value={financingFormData.startDate}
          placeholder="22/08/2023"
          label="Start Date"
          onChange={inputChangeHandler}
        />
      </div>

      <div className="flex flex-col gap-y-[1.5rem] w-fit">
        <WithLabel label="Type of Rate">
          <SelectButtonGroup
            id="rateType"
            options={['fixed', 'variable']}
            selected={financingFormData.rateType}
            onClick={selectButtonClickHandler}
          />
        </WithLabel>
        <div className="relative w-full">
          <TextField
            name="interestRate"
            type="number"
            step={10}
            max={100}
            min={0}
            inputClassName="pr-8"
            withLabelClassName="w-full"
            value={financingFormData.interestRate}
            label="Interest Rate"
            onChange={inputChangeHandler}
          />
          <span className="absolute top-[50%] right-[.75rem] text-md font-medium">%</span>
        </div>
      </div>

      <div className="flex max-lg:flex-col gap-4 w-[558px]">
        <WithLabel label="Interest Capitalization">
          <SelectButtonGroup
            id="interestCapitalization"
            options={['monthly', 'semi-annual']}
            selected={financingFormData.interestCapitalization}
            onClick={selectButtonClickHandler}
          />
        </WithLabel>
        <div className="relative w-full">
          <TextField
            name="interestOnlyPeriod"
            type="number"
            max={12}
            min={0}
            // withLabelClassName="w-full"
            value={financingFormData.interestOnlyPeriod}
            label="Interest Only Period"
            onChange={inputChangeHandler}
          />
          <span className="absolute top-[50%] right-[1em] text-sm font-regular">months</span>
        </div>
      </div>

      <div className="flex max-lg:flex-col gap-4 w-[558px]">
        <TextField
          name="term"
          type="number"
          withLabelClassName="w-full"
          value={financingFormData.term}
          placeholder="25"
          label="Term"
          onChange={inputChangeHandler}
        />
        <TextField
          name="amortization"
          type="number"
          withLabelClassName="w-full"
          value={financingFormData.amortization}
          placeholder="25"
          label="Amortization"
          onChange={inputChangeHandler}
        />
        <TextField
          name="financingFees"
          type="number"
          withLabelClassName="w-full"
          value={financingFormData.financingFees}
          placeholder="$"
          label="Financing Fees"
          onChange={inputChangeHandler}
        />
      </div>
    </Form>
  );
}
