import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { BookmarksSideBar } from '@entities/bookmarksContentSideBar';
import { MenuSideBar } from '@entities/menuContentSideBar';
import { IconImg } from '@shared/ui';
import { isMobileScreen } from '@shared/lib/screenWidth';
import { sideBarMenuList, menuType } from '../lib/menu';

import css from './sidebar.module.css';

type sideBarProps = { onGetWidth: (value: number) => void };

export const SideBar = ({ onGetWidth }: sideBarProps) => {
  const isMobile = isMobileScreen();
  const sideBarRef = useRef<HTMLElement>(null);
  const [menuItem, setMenuItem] = useState<string | null>('menu');

  const onSetMenu = (value: menuType) =>
    setMenuItem(value === menuItem ? null : value);

  const setClName = (value: menuType) =>
    classNames(css.navLink, value === menuItem ? css.active : '');

  useEffect(() => {
    if (sideBarRef.current) onGetWidth(sideBarRef.current.offsetWidth);
  }, [menuItem]);

  if (isMobile) return null;
  return (
    <aside className={css.wrapper} ref={sideBarRef}>
      <nav className={css.nav}>
        <ul className={css.navList}>
          {sideBarMenuList.map(({ title, type }, i) => (
            <li
              className={css.navElement}
              onClick={() => onSetMenu(type)}
              key={title + i.toString()}
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
