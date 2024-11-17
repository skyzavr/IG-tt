import { ReactElement } from 'react';

import css from './icon.module.css';

type iconProps = { children: ReactElement; onClickHandler?: () => void };

export const Icon = ({ children, onClickHandler }: iconProps) => {
  return (
    <button className={css.icon} onClick={onClickHandler}>
      {children}
    </button>
  );
};
