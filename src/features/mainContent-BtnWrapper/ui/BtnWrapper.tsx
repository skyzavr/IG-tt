import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { dataInit } from '@widgets/mainContent/lib/dummyData';
import { FormContent } from '@entities/formContent';
import { btnsParams, FormBtns } from '@entities/formButtons/ui/FormBtns';
import { FormModalContent } from '@entities/formModalContent';
import { Button, Icon, IconImg, Modal } from '@shared/ui';
import { isMobileScreen } from '@shared/lib/screenWidth';

import css from './btnWrapper.module.css';

type btnWrapperProps = {
  isCreate: boolean;
};

export const BtnWrapper = ({ isCreate = false }: btnWrapperProps) => {
  const isMobile = isMobileScreen();
  const [menuClass, setMenuClass] = useState<string>(css.none);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const onSetMenu = () => setIsMenuOpen((prev) => !prev);

  const onUpdateHeaderStyles = () =>
    setMenuClass(window.scrollY > 50 ? css.fixed : css.none);

  const mobileMenuClass = classNames(isMenuOpen ? css.btnShow : css.btnHide);

  const handleModal = () => {
    document.body.style.overflow = 'auto';
    setIsShowModal((prev) => !prev);
  };

  const btns: btnsParams = [
    { title: 'Сохранить', cl: 'fill', clickHandler: () => console.log('safe') },
    {
      title: 'Сохранить и выйти',
      cl: 'outline',
      clickHandler: () => console.log('safe & exit'),
    },
  ];

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
      {isShowModal &&
        createPortal(
          <Modal onCloseModal={handleModal}>
            <FormModalContent onCloseHandler={handleModal}>
              <FormContent
                taskList={dataInit}
                onUpdateData={() => console.log('d')}
              />
            </FormModalContent>
          </Modal>,
          document.body
        )}
      <div className={classNames(css.btnWrapper, menuClass)}>
        <div className={css.subBtns}>
          <p>Подзадача</p>
          {isCreate && (
            <Button cl="outline" onClickHandler={handleModal}>
              Создать
            </Button>
          )}
        </div>
        <div className={isMobile ? mobileMenuClass : ''}>
          <FormBtns cl="btns" btns={btns} />
        </div>
      </div>
    </>
  );
};
