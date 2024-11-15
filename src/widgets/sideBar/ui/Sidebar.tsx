import { useState } from 'react';
import classNames from 'classnames';

import { BookmarksSideBar } from '@entities/bookmarksContentSideBar';
import { MenuSideBar } from '@entities/menuContentSideBar';
import { IconImg } from '@shared/ui';
import { sideBarMenuList, menuType } from '../lib/menu';

import css from './sidebar.module.css';

export const SideBar = () => {
  const isMobile = window.innerWidth <= 768;
  const [menuItem, setMenuItem] = useState<string | null>('menu');

  if (isMobile) return null;

  const onSetMenu = (value: menuType) =>
    setMenuItem(value === menuItem ? null : value);

  const setClName = (value: menuType) =>
    classNames(css.navLink, value === menuItem ? css.active : '');

  return (
    <aside className={css.wrapper}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          {sideBarMenuList.map(({ title, type }) => (
            <li
              className={css.navElement}
              onClick={() => onSetMenu(type)}
              key={title}
            >
              <a className={setClName(type)}>
                <IconImg type={type} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {menuItem && (
        <div className={css.contentWrapper}>
          {menuItem === 'menu' && <MenuSideBar />}
          {menuItem === 'bookmarks' && <BookmarksSideBar />}
        </div>
      )}
    </aside>
  );
};
