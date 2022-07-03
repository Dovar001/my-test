import { FC, useState } from 'react';
import { visitorTestQuestions } from '../../tests.fake.data';
import { TestVariant } from '../test-variant.tsx';
import styles from './test-content.module.css';

interface TestContentProps {
  currentQuestion: number;
}

const TestContent: FC<TestContentProps> = ({ currentQuestion }) => {
  const isChecked = (id: string): boolean => {
    return visitorTestQuestions[currentQuestion - 1]?.answerIds?.includes(id);
  };

  const [rerender, setRerender] = useState(false);

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        {visitorTestQuestions[currentQuestion - 1]?.question?.title}
      </div>
      <div className={styles.variants}>
        {visitorTestQuestions[currentQuestion - 1]?.question?.variants?.map(
          (variant: any, idx: number) => (
            <TestVariant
              key={variant?.id}
              checked={isChecked(variant.id)}
              currentQuestion={currentQuestion}
              variant={`${idx}`}
              test={variant?.value}
              id={variant?.id}
              rerender={rerender}
              setRerender={setRerender}
            />
          )
        )}
      </div>
    </div>
  );
};

export { TestContent };
