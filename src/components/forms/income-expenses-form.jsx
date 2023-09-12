import { useState, useContext, useMemo } from 'react';
import { FormContext } from '@/context/form-context';
import Form from '@/components/form';
import TextFieldCurrency from '@/components/text-field-currency';
import Tabs from '@/components/tabs';

const tabs = [
  { value: 'current', label: 'Current' },
  { value: 'add_year', label: 'Add year' }
];

export default function IncomeExpensesForm({ goNext, goBack }) {
  const { incomeExpensesFormData, setIncomeExpensesFormData } = useContext(FormContext);
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const isFromValid = useMemo(() => !Object.values(incomeExpensesFormData).some((filed) => !filed), [incomeExpensesFormData]);

  const inputChangeHandler = ({ target }) => {
    setIncomeExpensesFormData((state) => ({
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
    <Form
      header={
        <header className="flex flex-col gap-y-[1.75rem] p-8 pb-0 border-b-[1px] border-b-[#DBE2ED]">
          <h2 className="text-xl font-semibold">Income and Expenses</h2>
          <Tabs tabs={tabs} selected={selectedTab} onTabClick={(value) => setSelectedTab(value)} />
        </header>
      }
      className="flex flex-col gap-y-[3.5rem]"
      isLast
      goNext={goNextClickHandler}
      goBack={goBack}
    >
      <h4 className="text-md font-500">Annual Income</h4>

      <div className='flex flex-col gap-y-[1.5rem]'>
        <div className='flex gap-x-4'>
          <TextFieldCurrency
            name="netRental"
            value={incomeExpensesFormData.netRental}
            placeholder="1,128"
            label="Net Rental"
            onChange={inputChangeHandler}
          />
          <TextFieldCurrency
            name="retailIncome"
            value={incomeExpensesFormData.retailIncome}
            placeholder="300"
            label="Retail Income"
            onChange={inputChangeHandler}
          />
        </div>

        <div className='flex gap-x-4'>
          <TextFieldCurrency
            name="insuranceIncome"
            value={incomeExpensesFormData.insuranceIncome}
            placeholder="300"
            label="Insurance Income"
            onChange={inputChangeHandler}
          />
          <TextFieldCurrency
            name="miscAdditionalIncome"
            value={incomeExpensesFormData.miscAdditionalIncome}
            placeholder="1,128"
            label="Misc Additional Income"
            onChange={inputChangeHandler}
          />
        </div>

        <div className='flex flex-col gap-y-[.5rem]'>
          <h4 className="text-md font-500 capitalize">(EGI) EFFECTIVE GROSS INCOME</h4>
          <h1 className="text-4xl font-500">$ 1,728</h1>
        </div>
      </div>

      <div className='flex flex-col gap-y-[1.5rem]'>
        <h4 className="text-md font-500">Annual Expenses</h4>

        <div className='flex gap-x-4'>
          <TextFieldCurrency
            name="propertyTaxes"
            value={incomeExpensesFormData.propertyTaxes}
            placeholder="40,453"
            label="Property Taxes"
            onChange={inputChangeHandler}
          />
          <TextFieldCurrency
            name="insurance"
            value={incomeExpensesFormData.insurance}
            placeholder="17,359"
            label="Insurance"
            onChange={inputChangeHandler}
          />
          <TextFieldCurrency
            name="utilities"
            value={incomeExpensesFormData.utilities}
            placeholder="12,140"
            label="Utilities"
            onChange={inputChangeHandler}
          />
        </div>

        <div className='flex gap-x-4'>
          <TextFieldCurrency
            name="repairsMaintenance"
            value={incomeExpensesFormData.repairsMaintenance}
            placeholder="6,953"
            label="Repairs & Maintenance"
            onChange={inputChangeHandler}
          />
          <TextFieldCurrency
            name="adminExpense"
            value={incomeExpensesFormData.adminExpense}
            placeholder="54,001"
            label="Admin Expense"
            onChange={inputChangeHandler}
          />
          <TextFieldCurrency
            name="offSiteManagement"
            value={incomeExpensesFormData.offSiteManagement}
            placeholder="24,000"
            label="Off-Site Management"
            onChange={inputChangeHandler}
          />
        </div>

        <div className='flex gap-x-4'>
          <TextFieldCurrency
            name="onSiteManagement"
            value={incomeExpensesFormData.onSiteManagement}
            placeholder="11,358"
            label="On-Site Management"
            onChange={inputChangeHandler}
          />
          <TextFieldCurrency
            name="advertisingMarketing"
            value={incomeExpensesFormData.advertisingMarketing}
            placeholder="11,067"
            label="Advertising / Marketing"
            onChange={inputChangeHandler}
          />
          <TextFieldCurrency
            name="miscellaneous"
            value={incomeExpensesFormData.miscellaneous}
            placeholder="13,500"
            label="Miscellaneous"
            onChange={inputChangeHandler}
          />
        </div>

        <div className='flex flex-col gap-y-[.5rem]'>
          <h4 className="text-md font-600 capitalize">(EGI) EFFECTIVE GROSS INCOME</h4>
          <h1 className="text-4xl font-500">$ 1,728</h1>
        </div>
      </div>

      <div className='flex flex-col gap-y-[.5rem]'>
        <h4 className="text-md font-600 capitalize">NET OPERATING INCOME</h4>
        <h1 className="text-4xl font-500">$190,831</h1>
      </div>
    </Form>
  );
}
