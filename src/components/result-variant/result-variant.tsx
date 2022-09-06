import { FC } from 'react';
import styles from './result-variant.module.css';
import { visitorTestQuestions } from '../../tests.fake.data';
import { FiCheck } from 'react-icons/fi';
import { Typography } from '@mui/material';
interface TestVariantsProps {
  variant: string;
  test: string;
  id: string;
  currentQuestion: number;
  checked: string | null;
  rerender: boolean;
  setRerender: (rerender: boolean) => void;
}

const Variants: any = {
  '0': 'A',
  '1': 'B',
  '2': 'C',
  '3': 'D',
};

const ResultVariant: FC<TestVariantsProps> = ({
  variant,
  test,
  id,
  currentQuestion,
  checked,
}) => {
  // const addAnswer = (answer: string) => {
  //   if (visitorTestQuestions[currentQuestion - 1]?.answerIds?.length > 0) {
  //     visitorTestQuestions[currentQuestion - 1]?.answerIds?.splice(
  //       0,
  //       1,
  //       answer
  //     );
  //   } else {
  //     visitorTestQuestions[currentQuestion - 1]?.answerIds?.push(answer);
  //   }
  // };

  const rightAnswer = () => {
    return visitorTestQuestions[currentQuestion - 1]?.rightAnswerId === id;
  };

  const isChecked = () => {
    return visitorTestQuestions[currentQuestion - 1]?.rightAnswerId === checked;
  };

  // const handleClick = () => {
  //   addAnswer(id);
  //   setRerender(!rerender);
  // };

  return (
    <div
      style={{
        backgroundColor:
          (rightAnswer() && checked) || rightAnswer()
            ? '#11b211'
            : !rightAnswer() && checked
            ? 'red'
            : '',
      }}
      className={styles.main}
    >
      <div className={styles.variant}>{Variants[variant]}</div>
      <div className={styles.test}>
        <Typography>{test}</Typography>
      </div>
    </div>
  );
};
export { ResultVariant };
