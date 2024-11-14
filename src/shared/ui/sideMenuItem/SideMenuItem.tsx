import classNames from 'classnames';

import { IconImg } from '../iconImg/IconImg';
import css from './sideMenuItem.module.css';

type itemProps = {
  title: string;
  content: string;
  menuItemHandler: (value: string) => void;
  currentMenuItem: string | null;
};

export const SideMenuItem = (props: itemProps) => {
  const { title, content, menuItemHandler, currentMenuItem } = props;

  const currentClass = classNames(
    css.listItem,
    currentMenuItem === title ? css.active : ''
  );

  return (
    <>
      <li className={currentClass} onClick={() => menuItemHandler(title)}>
        <span className={css.arrow}>
          <IconImg type="arrow" />
        </span>
        {title}
      </li>
      {currentMenuItem === title && <p className={css.content}>{content}</p>}
    </>
  );
};
