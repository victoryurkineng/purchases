import { FC, PropsWithChildren } from 'react';
import cx from 'classnames';
import styles from './table.module.css';

export const Table: FC<PropsWithChildren> = ({ children }) => {
  return (<table className={styles.table}>
    {children}
  </table>
  );
};

export const THead: FC<PropsWithChildren> = ({ children }) => {
  return (<thead className={cx('typo-table-head', styles.thead)}>
    {children}
  </thead>
  );
};

export const TBody: FC<PropsWithChildren> = ({ children }) => {
  return (<tbody className={styles.tbody}>
    {children}
  </tbody>
  );
};

export const TFoot: FC<PropsWithChildren> = ({ children }) => {
  return (<tfoot>
    {children}
  </tfoot>
  );
};

export const Tr: FC<PropsWithChildren> = ({ children }) => {
  return (<tr>
    {children}
  </tr>
  );
};

export interface TdProps extends PropsWithChildren {
  className?: string;
}

export const Td: FC<TdProps> = ({ children, className }) => {
  return (<td className={className}>
    {children}
  </td>
  );
};
