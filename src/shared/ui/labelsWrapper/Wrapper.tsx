import { useState } from 'react';

import { peopleDef } from '@type/labelGroups';
import { Icon, IconImg, LabelButton } from '@shared/ui/index';

import css from './wrapper.module.css';

type wrapperProps = { title: string; data: peopleDef; isRemovable?: boolean };

export const Wrapper = ({ title, data, isRemovable = false }: wrapperProps) => {
  const [newData, setNewData] = useState<peopleDef>([...data]);

  const getNewList = (list: peopleDef, index: number) => {
    return [...list.slice(0, index), ...list.slice(index + 1)];
  };

  const onUpdateData = ({ idRem }: { idRem: string }) => {
    const elementIndex = newData.findIndex(({ id }) => id === idRem);
    if (elementIndex === -1) return;
    setNewData(getNewList(newData, elementIndex));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.title}>{title}</label>
      <div className={css.content}>
        <div className={css.labelWrapper}>
          {newData.map(({ name, id }) => (
            <LabelButton
              title={name}
              key={id}
              isDeleteBtn={isRemovable}
              id={id}
              onUpdate={onUpdateData}
            />
          ))}

          <button className={css.labelDeleteBtn} onClick={() => setNewData([])}>
            <IconImg type="delete" />
          </button>
        </div>
        <div className={css.btnWrapper}>
          <Icon>
            <IconImg type="add" />
          </Icon>
          <Icon>
            <IconImg type="search" />
          </Icon>
        </div>
      </div>
    </div>
  );
};
