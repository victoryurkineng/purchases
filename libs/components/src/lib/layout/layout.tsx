import { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import { Header } from '../header/header';
import styles from './layout.module.css';

export interface LayoutProps extends PropsWithChildren {
  title: string;
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <main className={cx('container', styles.main)}>{children}</main>
    </>
  );
};
