import { useContext, useMemo } from "react";
import { FormContext } from '@/context/form-context'
import Form from "@/components/form";
import TextFiled from "@/components/text-field";

export default function PropertyDetailForm({ goNext }) {
    const { propertyDetailFormData, setPropertyDetailFormData } = useContext(FormContext);

    const isFromValid = useMemo(() => !Object.values(propertyDetailFormData).some(filed => !filed), [propertyDetailFormData]);

    const inputChangeHandler = ({ target }) => {
        setPropertyDetailFormData(state => ({
            ...state,
            [target.name]: target.value
        }));
    };

    const goNextClickHandler = () => {
        if(isFromValid) {
            goNext();
        }
    };
    return (
        <Form
            title='Property details'
            className='flex flex-col gap-y-4'
            isFirst
            goNext={goNextClickHandler}
        >
            <h4 className="text-md font-medium">Property Detail</h4>
            <TextFiled
                name='propertyName'
                value={propertyDetailFormData.propertyName}
                placeholder='Property name'
                label='Storage A'
                onChange={inputChangeHandler}
            />
            <TextFiled
                name='address'
                value={propertyDetailFormData.address}
                placeholder='1373 5th Avenue, Falher, Alberta T0H 1M0'
                label='Address line'
                onChange={inputChangeHandler}
            />

            <div className="flex gap-x-4 w-full">
                <TextFiled
                    name='country'
                    value={propertyDetailFormData.country}
                    placeholder='United Kingdom'
                    label='Country'
                    onChange={inputChangeHandler}
                />
                <TextFiled
                    name='city'
                    value={propertyDetailFormData.city}
                    placeholder='London'
                    label='City'
                    onChange={inputChangeHandler}
                />
                <TextFiled
                    name='zip'
                    value={propertyDetailFormData.zip}
                    placeholder='SE1 1AB'
                    label='ZIP/Postal Code'
                    onChange={inputChangeHandler}
                />
            </div>

            <TextFiled
                name='closeDate'
                type='date'
                value={propertyDetailFormData.closeDate}
                label='Close Date'
                onChange={inputChangeHandler}
            />
        </Form>
    )
}
