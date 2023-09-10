import { useContext, useMemo } from "react"
import { FormContext } from '@/context/form-context'
import Form from "@/components/form"
import TextField from "@/components/text-field"
import SelectButtonGroup from "@/components/select-button-group"
import WithLabel from "@/components/with-label"

export default function FinancingForm({ goNext, goBack }) {
    const { financingFormData, setFinancingFormData } = useContext(FormContext);

    const isFromValid = useMemo(() => !Object.values(financingFormData).some(filed => !filed), [financingFormData]);

    const inputChangeHandler = ({ target }) => {
        setFinancingFormData(state => ({ ...state, [target.name]: target.value }));
    };
    const selectButtonClickHandler = option => ({ target }) => {
        setFinancingFormData(state => ({ ...state, [target.id]: option }));
    };

    const goNextClickHandler = () => {
        if(isFromValid) {
            goNext();
        }
    };
    return (
        <Form title='Financing' className="flex flex-col gap-y-4" isSeparator goNext={goNextClickHandler} goBack={goBack}>
            <TextField
                name='lender'
                value={financingFormData.lender}
                placeholder='ABC Capitals'
                label='Lender'
                onChange={inputChangeHandler}
            />

            <div className="flex gap-x-4">
                <TextField
                    name='loanAmount'
                    type='number'
                    step={10}
                    value={financingFormData.loanAmount}
                    placeholder='$ 5,000,000'
                    label='Loan Amount'
                    onChange={inputChangeHandler}
                />
                <TextField
                    name='startDate'
                    type='date'
                    value={financingFormData.startDate}
                    placeholder='22/08/2023'
                    label='Start Date'
                    onChange={inputChangeHandler}
                />
            </div>

            <WithLabel label='Type of Rate'>
                <SelectButtonGroup
                    id='rateType'
                    options={['fixed', 'variable']}
                    selected={financingFormData.rateType}
                    onClick={selectButtonClickHandler}
                />
            </WithLabel>

            <div className="relative">
                <TextField
                    name='interestRate'
                    type='number'
                    step={10}
                    max={100}
                    min={0}
                    withLabelClassName="w-[13em]"
                    value={financingFormData.interestRate}
                    label='Interest Rate'
                    onChange={inputChangeHandler}
                />
                <span className="absolute top-[50%] left-[11em] text-md font-medium">%</span>
            </div>

            <div className="flex gap-x-4">
                <WithLabel label='Interest Capitalization'>
                    <SelectButtonGroup
                        id='interestCapitalization'
                        options={['monthly', 'semi-annual']}
                        selected={financingFormData.interestCapitalization}
                        onClick={selectButtonClickHandler}
                    />
                </WithLabel>
                <div className="relative w-full">
                    <TextField
                        name='interestOnlyPeriod'
                        type='number'
                        max={12}
                        min={0}
                        withLabelClassName="w-full"
                        value={financingFormData.interestOnlyPeriod}
                        placeholder='12'
                        label='Interest Only Period'
                        onChange={inputChangeHandler}
                    />
                    <span className="absolute top-[50%] right-[1em] text-sm font-medium">months</span>
                </div>
            </div>

            <div className="flex gap-x-4">
                <TextField
                    name='term'
                    type='number'
                    withLabelClassName="w-full"
                    value={financingFormData.term}
                    placeholder='25'
                    label='Term'
                    onChange={inputChangeHandler}
                />
                <TextField
                    name='amortization'
                    type='number'
                    withLabelClassName="w-full"
                    value={financingFormData.amortization}
                    placeholder='25'
                    label='Amortization'
                    onChange={inputChangeHandler}
                />
                <TextField
                    name='financingFees'
                    type='number'
                    withLabelClassName="w-full"
                    value={financingFormData.financingFees}
                    placeholder='$'
                    label='Financing Fees'
                    onChange={inputChangeHandler}
                />
            </div>
        </Form>
    )
}
