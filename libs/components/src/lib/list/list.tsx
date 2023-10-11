import { FC } from 'react';
import cx from 'classnames';
import { DefaultProps } from '../common/types';
import styles from './list.module.css';

export const List: FC<DefaultProps> = ({ children, className }) => {
  return <ul className={cx(styles.list, className)}>{children}</ul>;
};

export const ListItem: FC<DefaultProps> = ({ children, className }) => {
  return <li className={cx(styles.item, className)}>{children}</li>;
};
