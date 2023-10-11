import { FC } from 'react';
import { Purchase } from '@idme/models';
import cx from 'classnames';
import { ListItem } from './list-item';
import styles from './list.module.css';

interface ListProps {
  purchases: Purchase[];
  className?: string;
}

export const List: FC<ListProps> = ({ purchases, className }) => {
  return <ul className={cx(styles.list, className)}>
  {
    purchases.map((purchase, index) => <ListItem key={index} purchase={purchase}/>)
  }
</ul>
}
