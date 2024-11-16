import { useState } from 'react';

import { Icon, IconImg, Search, SideMenuItem } from '@shared/ui';
import { menuList } from '../lib/menuDummy';

import css from './menu.module.css';

export const Menu = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState<string | null>(null);
  const [menuQuery, setMenuQuery] = useState('');

  const menuItemHandler = (value: string) => {
    value === currentMenuItem
      ? setCurrentMenuItem(null)
      : setCurrentMenuItem(value);
  };

  const onUpdateData = (value: string) => {
    setMenuQuery(value);
  };

  return (
    <>
      <div className={css.searchWrapper}>
        <Search
          title="Поиск по меню"
          icon="filter"
          onUpdateData={onUpdateData}
        />
        <Icon onClickHandler={() => console.log('unPin')}>
          <IconImg type="unPin" />
        </Icon>
      </div>
      <div>
        <ul className={css.list}>
          {menuList.map(({ title, content }, i) => (
            <SideMenuItem
              {...{
                title,
                content,
                menuItemHandler,
                currentMenuItem,
                menuQuery,
              }}
              key={title + i.toString()}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
