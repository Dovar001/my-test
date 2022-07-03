import { FC } from 'react';
import { visitorTestBaseInfo } from '../../tests.fake.data';
import styles from './header.module.css'

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div>{visitorTestBaseInfo?.test?.title}</div>
      <div>{visitorTestBaseInfo?.visitor?.firstName}</div>
    </div>
  );
};

export { Header };
