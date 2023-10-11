import { FC } from 'react';
import cx from 'classnames';
import styles from './header.module.css';

export interface HeaderProps {
  /**
   * Page header title
   */
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className={cx('container', styles.container)}>
      <h1 className={cx('typo-head-1', styles.header)}>{title}</h1>
    </header>
  );
};
