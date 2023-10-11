import { FC } from 'react';
import { format } from 'date-fns';
import parse from 'html-react-parser';
import cx from 'classnames';
import { Purchase } from '@idme/models';
import { useTranslation } from '@idme/i18n';
import { Image } from '../image/image';
import styles from './list-item.module.css';

export interface ListItemProps {
  purchase: Purchase;
}

export const ListItem: FC<ListItemProps> = ({ purchase }) => {
  const { t } = useTranslation();

  return (
    <li className={styles.container}>
      <div className={styles.header}>
        <div>
          <Image src={purchase.location} alt={purchase.name} size="small" />
        </div>
        <h2 className="typo-table-cell-name">{purchase.name}</h2>
        <span className="typo-list-price">
          {t('purchases.currency', { val: purchase.price })}
        </span>
      </div>

      <p className={cx('typo-table-cell', styles.description)}>
        {parse(purchase.description)}
      </p>

      <p>
        <span className="typo-table-head">{t('purchases.purchase_date')}</span>
        <br />
        <span className="typo-list-date">
          {format(new Date(purchase.purchaseDate), 'MMMM d, yyyy')}
        </span>
      </p>
    </li>
  );
};
