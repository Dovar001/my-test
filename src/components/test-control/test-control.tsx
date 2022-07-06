import { Button } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  visitorTestQuestions,
  visitorTestBaseInfo,
} from '../../tests.fake.data';
import styles from './test-control.module.css';

interface TestControlProps {
  currentQuestion: number;
  setCurrentQuestion: (currentQuestion: number) => void;
}

const TestControl: FC<TestControlProps> = ({
  currentQuestion,
  setCurrentQuestion,
}) => {
  const all: number = visitorTestQuestions.length;

  const nextQuestion = () => {
    currentQuestion < all && setCurrentQuestion(currentQuestion + 1);
  };
  const prevQuestion = () => {
    currentQuestion > 1 && setCurrentQuestion(currentQuestion - 1);
  };

  const onFinish = () => {
    const finishBody = visitorTestQuestions.map((item: any) => {
      return {
        id: item.id,
        answerIds: item.answerIds,
      };
    });
    console.log(finishBody);
  };

  return (
    <div className={styles.control}>
      <Button
        style={{ visibility: currentQuestion > 1 ? 'visible' : 'hidden' }}
        size='large'
        variant='contained'
        onClick={prevQuestion}
      >
        Previous
      </Button>

      <div className={styles.count}>{`${currentQuestion} / ${all}`}</div>

      {currentQuestion === all ? (
        <Button
          component={Link}
          to={`api/testing/${visitorTestBaseInfo?.id}/testing`}
          size='large'
          variant='contained'
          onClick={() => onFinish()}
          style={{ width: '100px' }}
        >
          Finish
        </Button>
      ) : (
        <Button size='large' variant='contained' onClick={nextQuestion}>
          Next
        </Button>
      )}
    </div>
  );
};

export { TestControl };
