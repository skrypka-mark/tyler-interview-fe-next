'use client';

import { useEffect } from 'react';
import { useSteps } from '@/hooks';
import FormContext from '@/context/form-context';

import StepsBullets from '@/components/steps-bullets';
import Component from '@/components/component';

import PropertyDetailForm from '@/components/forms/property-detail-form';
import RentRollForm from '@/components/forms/rent-roll-form';
import FinancingForm from '@/components/forms/financing-form';
import IncomeExpensesForm from '@/components/forms/income-expenses-form';

export default function StepsForm() {
  const [steps, { currentIndex, push, goBack, goNext }] = useSteps([
    {
      name: 'Property detail',
      hash: '#property-detail',
      status: 'upcoming',
      Component: PropertyDetailForm,
    },
    {
      name: 'Rent roll',
      hash: '#rent-roll',
      status: 'upcoming',
      Component: RentRollForm,
    },
    {
      name: 'Financing',
      hash: '#financing',
      status: 'upcoming',
      Component: FinancingForm,
    },
    {
      name: 'Income & Expenses',
      hash: '#income-expenses',
      status: 'upcoming',
      Component: IncomeExpensesForm,
    },
  ]);

  useEffect(() => {
    const { hash } = window.location;
    const index = steps.findIndex((step) => step.hash === hash);

    if (index === -1) return;

    push(index);
  }, []);

  const stepClickHandler = (index) => {
    push(index);
  };

  return (
    <div className="flex bg-white h-full rounded-2xl">
      <aside className="p-8 min-w-fit">
        <StepsBullets steps={steps ?? []} stepClickHandler={stepClickHandler} />
      </aside>
      <main className="w-full border-l-2">
        <FormContext>
          <Component
            is={steps[currentIndex]?.Component}
            goNext={goNext}
            goBack={goBack}
          />
        </FormContext>
      </main>
    </div>
  );
}
