import { FC, useState } from 'react';
import { visitorTestQuestions } from '../../tests.fake.data';
import { ResultVariant } from '../result-variant';
import { TestVariant } from '../test-variant.tsx';
import styles from './result-content.module.css';

interface TestContentProps {
  currentQuestion: number;
}

const ResultContent: FC<TestContentProps> = ({ currentQuestion }) => {
  const isChecked = (id: string): string | null => {
    return visitorTestQuestions[currentQuestion - 1]?.answerIds?.includes(id)
      ? id
      : null;
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
            <ResultVariant
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

export { ResultContent };
