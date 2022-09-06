import { Button } from '@mui/material';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { visitorTestQuestions } from '../../tests.fake.data';
import { ResultContent } from '../result-content';

const Result: FC = () => {
  const params = useParams();

  const startNew = () => {
    visitorTestQuestions.map((item: any) => {
      return (item.answerIds = []);
    });
  };

  return (
    <div>
      <div>
        {visitorTestQuestions?.map((value: any, index: any) => {
          return <ResultContent currentQuestion={index + 1} />;
        })}
      </div>
      <Button variant='contained' onClick={() => startNew()}>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to='/'>
          Start new test
        </Link>
      </Button>
    </div>
  );
};
export { Result };
