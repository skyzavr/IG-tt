import { ReactElement, useCallback, useEffect } from 'react';

import css from './modal.module.css';

type modalProps = { children: ReactElement; onCloseModal: () => void };

export const Modal = ({ children, onCloseModal }: modalProps) => {
  document.body.style.overflow = 'hidden';

  const onExit = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', onExit, false);

    return () => {
      document.removeEventListener('keydown', onExit, false);
    };
  }, [onExit]);

  return (
    <div className={css.wrapper}>
      <div className={css.background} onClick={onCloseModal}></div>
      <div className={css.content}>{children}</div>
    </div>
  );
};
