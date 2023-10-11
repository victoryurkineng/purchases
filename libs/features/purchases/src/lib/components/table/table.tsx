import { FC } from 'react';
import { format } from 'date-fns';
import parse from 'html-react-parser';
import cx from 'classnames';
import { Table as TableComponent, THead, TBody, Tr, Td } from '@idme/components';
import { Image } from '../image/image';
import { useTranslation } from '@idme/i18n';
import { Purchase } from '@idme/models';
import styles from './table.module.css';

interface TableProps {
  purchases: Purchase[];
  className?: string;
}

export const Table: FC<TableProps> = ({ purchases, className }) => {
  const { t } = useTranslation();
  return <TableComponent className={cx(styles.table, className)}>
    <THead>
      <Tr>
        <Td>{t('purchases.name')}</Td>
        <Td>{t('purchases.location')}</Td>
        <Td>{t('purchases.purchase_date')}</Td>
        <Td>{t('purchases.category')}</Td>
        <Td>{t('purchases.description')}</Td>
        <Td>{t('purchases.price')}</Td>
      </Tr>
    </THead>
    <TBody>
      {
        purchases.map((purchase, index) => <Tr key={index}>
          <Td>{purchase.name}</Td>
          <Td><Image src={purchase.location} alt={purchase.name} /></Td>
          <Td className={styles.date}>{format(new Date(purchase.purchaseDate), 'MMMM d, yyyy')}</Td>
          <Td>{purchase.category}</Td>
          <Td className={styles.description}>{parse(purchase.description)}</Td>
          <Td>{t('purchases.currency', {val: purchase.price})}</Td>
        </Tr>)
      }
    </TBody>
  </TableComponent>;
}
