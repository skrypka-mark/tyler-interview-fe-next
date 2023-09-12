'use client';

import { useSteps } from '@/hooks';
import FormContext from '@/context/form-context';

import StepsBullets from '@/components/steps-bullets';
import Component from '@/components/component';

import PropertyDetailForm from '@/components/forms/property-detail-form';
import RentRollForm from '@/components/forms/rent-roll-form';
import FinancingForm from '@/components/forms/financing-form';
import IncomeExpensesForm from '@/components/forms/income-expenses-form';
import Spinner from '@/components/spinner';
import Congratulations from '@/components/congratulations';

export default function StepsForm() {
  const [steps, { currentIndex, push, goBack, goNext }] = useSteps([
    {
      name: 'Property detail',
      hash: '#property-detail',
      status: 'upcoming',
      Component: PropertyDetailForm
    },
    {
      name: 'Rent roll',
      hash: '#rent-roll',
      status: 'upcoming',
      Component: RentRollForm
    },
    {
      name: 'Financing',
      hash: '#financing',
      status: 'upcoming',
      Component: FinancingForm
    },
    {
      name: 'Income & Expenses',
      hash: '#income-expenses',
      status: 'upcoming',
      Component: IncomeExpensesForm
    },
    {
      hash: '#finished',
      Component: Congratulations
    }
  ]);

  return (
    <div className="flex max-xl:flex-col bg-white w-full min-h-full rounded-2xl">
      {!steps[currentIndex] ? (
        <div className="flex items-center justify-center w-full h-full">
          <Spinner />
        </div>
      ) : (
        <>
          <aside className="flex flex-col items-start basis-[30%] h-full p-8">
            <StepsBullets steps={steps} stepClickHandler={push} />
          </aside>
          <main className="basis-[100%] h-full xl:border-l-2 max-xl:border-t-2">
            <FormContext>
              <Component is={steps[currentIndex]?.Component} goNext={goNext} goBack={goBack} />
            </FormContext>
          </main>
        </>
      )}
    </div>
  );
}
