import { createContext, useState } from 'react';
import { countryOptions, cityOptions } from '@/constants';

export const FormContext = createContext();

export default function Context({ children }) {
  const [propertyDetailFormData, setPropertyDetailFormData] = useState({
    propertyName: '',
    address: '',
    country: countryOptions[0].value,
    city: cityOptions[0].value,
    zip: '',
    closeDate: ''
  });
  const [financingFormData, setFinancingFormData] = useState({
    lender: '',
    loanAmount: '',
    startDate: '',
    rateType: 'fixed',
    interestRate: '',
    interestCapitalization: 'monthly',
    interestOnlyPeriod: 0,
    term: '',
    amortization: '',
    financingFees: ''
  });
  const [incomeExpensesFormData, setIncomeExpensesFormData] = useState({
    netRental: '',
    retailIncome: '',
    insuranceIncome: '',
    miscAdditionalIncome: '',
    propertyTaxes: '',
    insurance: '',
    utilities: '',
    repairsMaintenance: '',
    adminExpense: '',
    offSiteManagement: '',
    onSiteManagement: '',
    advertisingMarketing: '',
    miscellaneous: ''
  });

  return (
    <FormContext.Provider
      value={{
        propertyDetailFormData,
        financingFormData,
        incomeExpensesFormData,
        setPropertyDetailFormData,
        setFinancingFormData,
        setIncomeExpensesFormData
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
