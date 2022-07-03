import { FC, useState } from 'react';
import { Header } from '../header';
import { TestBody } from '../test-body/test-body';
import { StartTest } from '../test-start';
import styles from './main.module.css';

const Main: FC = () => {
  const [startTest, setStartTest] = useState<boolean>(false);
  return (
    <div className={styles.main}>
      <Header />
      {!startTest ? (
        <StartTest startTest={startTest} setStartTest={setStartTest} />
      ) : (
        <TestBody />
      )}
    </div>
  );
};

export { Main };
