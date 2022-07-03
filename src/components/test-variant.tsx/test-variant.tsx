import { FC} from 'react';
import styles from './test-variant.module.css';
import { visitorTestQuestions } from '../../tests.fake.data';
import { FiCheck } from 'react-icons/fi';
import { Typography } from '@mui/material';
interface TestVariantsProps {
  variant: string;
  test: string;
  id: string;
  currentQuestion: number;
  checked: boolean;
  rerender: boolean;
  setRerender: (rerender: boolean) => void;
}

const Variants: any = {
  '0': 'A',
  '1': 'B',
  '2': 'C',
  '3': 'D',
};

const TestVariant: FC<TestVariantsProps> = ({
  variant,
  test,
  id,
  currentQuestion,
  checked,
  rerender,
  setRerender,
}) => {
  const addAnswer = (answer: string) => {
    if (visitorTestQuestions[currentQuestion - 1]?.answerIds?.length > 0) {
      visitorTestQuestions[currentQuestion - 1]?.answerIds?.splice(
        0,
        1,
        answer
      );
    } else {
      visitorTestQuestions[currentQuestion - 1]?.answerIds?.push(answer);
    }
  };

  const handleClick = () => {
    addAnswer(id);
    setRerender(!rerender);
  };

  return (
    <div className={styles.main} onClick={() => handleClick()}>
      <div
        className={styles.variant}
        style={{
          backgroundColor: checked ? 'rgb(8, 8, 131)' : '#fff',
        }}
      >
        {!checked ? (
          Variants[variant]
        ) : (
          <FiCheck fontSize='2rem' color='#fff' />
        )}
      </div>
      <div className={styles.test}>
        <Typography>
        {test}
        </Typography>
        </div>
    </div>
  );
};
export { TestVariant };
