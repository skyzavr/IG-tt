import { useState } from 'react';

import { BtnWrapper } from '@features/mainContent-BtnWrapper';
import { FormContent } from '@entities/formContent';
import { dataInit } from '../lib/dummyData';

import css from './mainContent.module.css';

type mainContentProps = { sideBarWidth: number };

export const MainContent = ({ sideBarWidth }: mainContentProps) => {
  const [taskList, setTaskList] = useState({ ...dataInit });

  const onUpdateData = ({ type, value }: { type: string; value: string }) => {
    setTaskList({ ...taskList, [type]: value });
  };

  return (
    <section
      className={css.wrapper}
      style={{ width: `calc(100% - ${sideBarWidth}px)` }}
    >
      <BtnWrapper isCreate />
      <form className={css.content}>
        <h1 className={css.title}>{taskList.title}</h1>
        <FormContent taskList={taskList} onUpdateData={onUpdateData} />
      </form>
    </section>
  );
};
