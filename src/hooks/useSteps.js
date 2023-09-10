import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export const useSteps = (defaultSteps) => {
  const router = useRouter();
  const pathname = usePathname();

  const [steps, setSteps] = useState(defaultSteps);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const { hash } = window.location;
    const index = steps.findIndex((step) => step.hash === hash);

    if (index === -1) return;

    setCurrentIndex(index);
  }, []);

  const push = (index) => {
    if (index > steps.length || !(index + 1)) return;

    setSteps((state) => {
      const newState = [...state];

      for (let i = 0; i <= index; i++) {
        if (steps[i - 1]) {
          newState[i - 1].status = 'complete';
        }
      }
      for (let i = index; i < steps.length; i++) {
        if (steps[i + 1]) {
          newState[i + 1].status = 'upcoming';
        }
      }
      if (newState[index]) {
        newState[index].status = 'current';
      }

      return newState;
    });
    setCurrentIndex(index);
    router.push(`${pathname}${steps[index].hash}`);
  };

  const goBack = () => {
    push(currentIndex - 1);
  };
  const goNext = () => {
    push(currentIndex + 1);
  };

  return [steps, { currentIndex, push, goBack, goNext }];
};
