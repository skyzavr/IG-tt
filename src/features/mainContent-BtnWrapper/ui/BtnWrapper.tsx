import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Button, Icon, IconImg } from '@shared/ui';
import { isMobileScreen } from '@shared/lib/screenWidth';

import css from './btnWrapper.module.css';

type btnWrapperProps = {
  isCreate: boolean;
};

export const BtnWrapper = ({ isCreate = false }: btnWrapperProps) => {
  const isMobile = isMobileScreen();
  const [menuClass, setMenuClass] = useState<string>(css.none);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onSetMenu = () => setIsMenuOpen((prev) => !prev);

  const onUpdateHeaderStyles = () =>
    setMenuClass(window.scrollY > 50 ? css.fixed : css.none);

  const mobileMenuClass = classNames(
    css.btns,
    isMenuOpen ? css.btnShow : css.btnHide
  );

  useEffect(() => {
    window.addEventListener('scroll', onUpdateHeaderStyles);
    return () => {
      window.removeEventListener('scroll', onUpdateHeaderStyles);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <span className={css.mobileMenu}>
          <Icon onClickHandler={onSetMenu}>
            <IconImg type="menu" />
          </Icon>
        </span>
      )}
      <div className={classNames(css.btnWrapper, menuClass)}>
        <div className={css.subBtns}>
          <p>Подзадача</p>
          {isCreate && (
            <Button cl="outline" onClickHandler={() => console.log('create')}>
              Создать
            </Button>
          )}
        </div>
        <div className={mobileMenuClass}>
          <Button cl="fill" onClickHandler={() => console.log('create')}>
            Сохранить
          </Button>
          <Button cl="outline" onClickHandler={() => console.log('create')}>
            Сохранить и выйти
          </Button>
        </div>
      </div>
    </>
  );
};
