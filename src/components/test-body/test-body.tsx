import { FC, useState } from 'react';
import { TestContent } from '../test-content/test-content';
import { TestControl } from '../test-control';
import styles from './test-body.module.css';


const TestBody: FC = () => {

  const [currentQuestion,setCurrentQuestion] = useState<number>(1)

  return <div className={styles.body}>
    <TestContent currentQuestion={currentQuestion} />
    <TestControl currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
  </div>;
};

export { TestBody };
