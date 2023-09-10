import { createContext, useState } from 'react'

export const FormContext = createContext();

export default function Context({ children }) {
    const [propertyDetailFormData, setPropertyDetailFormData] = useState({
        propertyName: '',
        address: '',
        country: '',
        city: '',
        zip: '',
        closeDate: ''
    });
    const [financingFormData, setFinancingFormData] = useState({
        lender: '',
        loanAmount: '',
        startDate: '',
        rateType: '',
        interestRate: '',
        interestCapitalization: '',
        interestOnlyPeriod: '',
        term: '',
        amortization: '',
        financingFees: ''
    });

    return (
        <FormContext.Provider
            value={{
                propertyDetailFormData,
                financingFormData,
                setPropertyDetailFormData,
                setFinancingFormData
            }}
        >
            {children}
        </FormContext.Provider>
    )
}
