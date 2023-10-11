import { FC } from 'react';
import { DefaultProps } from '../common/types';
import cx from 'classnames';
import styles from './table.module.css';

export const Table: FC<DefaultProps> = ({ children, className }) => {
  return (<table className={cx(styles.table, className)}>
    {children}
  </table>
  );
};

export const THead: FC<DefaultProps> = ({ children, className }) => {
  return (<thead className={cx('typo-table-head', styles.thead, className)}>
    {children}
  </thead>
  );
};

export const TBody: FC<DefaultProps> = ({ children, className }) => {
  return (<tbody className={cx(styles.tbody, className)}>
    {children}
  </tbody>
  );
};

export const TFoot: FC<DefaultProps> = ({ children, className }) => {
  return (<tfoot className={className}>
    {children}
  </tfoot>
  );
};

export const Tr: FC<DefaultProps> = ({ children, className }) => {
  return (<tr className={className}>
    {children}
  </tr>
  );
};

export const Td: FC<DefaultProps> = ({ children, className }) => {
  return (<td className={className}>
    {children}
  </td>
  );
};
