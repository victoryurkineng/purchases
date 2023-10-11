import { useEffect, useState } from 'react';
import { Layout } from '@idme/components';
import { useTranslation } from '@idme/i18n';
import { purchaseService } from '@idme/services';
import { Purchase } from '@idme/models';
import { Table, List } from './lib/components';
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

  return (
    <Layout title={t('headers.purchases')}>
      {isLoading && <div>Loading...</div>}

      {!isLoading && error && <div>{error}</div>}

      {!isLoading && !error && purchases && (
        <>
          <Table className={styles.table} purchases={purchases} />
          <List className={styles.list} purchases={purchases} />
        </>
      )}
    </Layout>
  );
};
