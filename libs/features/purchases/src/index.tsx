import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import parse from 'html-react-parser';
import { Layout, Table, THead, TBody, Tr, Td } from '@idme/components';
import { useTranslation } from '@idme/i18n';
import { purchaseService } from '@idme/services';
import { Purchase } from '@idme/models';
import styles from './index.module.css';

export const Purchases = () => {
  // Local state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  // Hooks
  const { t } = useTranslation();

  // Load data on mount
  useEffect(() => {
    const loadPurchases = async () => {
      try {
        setIsLoading(true);
        const purchases = await purchaseService.getPurchases();
        setPurchases(purchases);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    loadPurchases();
  }, []);
  
  return <Layout title={t('headers.purchases')}>
    {isLoading && <div>Loading...</div>}
    {!isLoading && error && <div>{error}</div>}
    {!isLoading && ! error && purchases && <div>
      <Table>
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
              <Td><img src={purchase.location} alt={purchase.name} /></Td>
              <Td>{format(new Date(purchase.purchaseDate), 'MMMM d, yyyy')}</Td>
              <Td>{purchase.category}</Td>
              <Td className={styles.description}>{parse(purchase.description)}</Td>
              <Td>{t('purchases.currency', {val: purchase.price})}</Td>
            </Tr>)
          }
        </TBody>
      </Table>
    </div>}
  </Layout>;
};
