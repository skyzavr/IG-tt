import { FormEvent, useEffect, useState } from 'react';

import { BtnWrapper } from '@features/mainContent-BtnWrapper';
import { FormContent } from '@entities/formContent';
import { dataInit } from '../lib/dummyData';

import css from './mainContent.module.css';
import { useWidth } from '@shared/lib/useWidth';

type mainContentProps = { sideBarWidth: number };

export const MainContent = ({ sideBarWidth }: mainContentProps) => {
  const [taskList, setTaskList] = useState({ ...dataInit });
  const [sidebarWidthCur, setSideBarWidth] = useState(sideBarWidth);
  const width = useWidth();
  const onUpdateData = ({ type, value }: { type: string; value: string }) => {
    setTaskList({ ...taskList, [type]: value });
  };

  const onSendForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  useEffect(() => {
    setSideBarWidth(width < 768 ? 0 : sideBarWidth);
  }, [width, sideBarWidth]);
  return (
    <section
      className={css.wrapper}
      style={{ width: `calc(100% - ${sidebarWidthCur}px)` }}
    >
      <BtnWrapper isCreate />
      <form className={css.content} onSubmit={onSendForm}>
        <h1 className={css.title}>{taskList.title}</h1>
        <FormContent taskList={taskList} onUpdateData={onUpdateData} />
      </form>
    </section>
  );
};
