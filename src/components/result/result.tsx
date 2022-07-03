import { Button } from '@mui/material';
import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { finishBody, visitorTestQuestions } from '../../tests.fake.data';

const Result: FC = () => {
  const params = useParams();

  const startNew = () => {
    visitorTestQuestions.map((item:any) => {
      return (item.answerIds = []);
    });
  };

  return (
    <div>
      <div>
        {' '}
        <b>This is result of user with id</b> :{params?.id}
      </div>
      <hr />
      <div>{JSON.stringify(finishBody)}</div>
      <hr />
      <Button variant='contained' onClick={() => startNew()}>
        <Link style={{ textDecoration: 'none', color: '#fff' }} to='/'>
          Start new test
        </Link>
      </Button>
    </div>
  );
};
export { Result };
