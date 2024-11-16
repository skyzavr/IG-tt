import { useState } from 'react';

import { Header } from '@widgets/header';
import { MainContent } from '@widgets/mainContent';
import { SideBar } from '@widgets/sideBar';

import css from './app.module.css';

export const App = () => {
  const [sideBarWidth, setSideBarWidth] = useState<number>(0);
  const onGetSideBarWidth = (value: number) => {
    setSideBarWidth(value);
  };
  return (
    <>
      <Header />
      <main className={css.mainWrapper}>
        <SideBar onGetWidth={onGetSideBarWidth} />
        <MainContent sideBarWidth={sideBarWidth} />
      </main>
    </>
  );
};
