import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import styles from './test-start.module.css';

interface StartTestProps {
  startTest: boolean;
  setStartTest: (startTest: boolean) => void;
}

const StartTest: FC<StartTestProps> = ({ setStartTest, startTest }) => {
  return (
    <div className={styles.start}>
      <div className={styles.text}>
        <Typography variant='h6'>
          If you are not sure about your level,don't worry,you can take this
          test.There are 20 questions and there is no time limit. You will be
          able to see the answers when you finish the test.
        </Typography>
        <Button
          variant='contained'
          size='large'
          onClick={() => setStartTest(!startTest)}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export { StartTest };
