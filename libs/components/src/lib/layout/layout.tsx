import { FC, PropsWithChildren } from 'react';
import { Header } from '../header/header';

export interface LayoutProps extends PropsWithChildren {
  title: string;
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (<>
    <Header title={title} />
    <main className="container">
      {children}
    </main>
  </>
  );
};
