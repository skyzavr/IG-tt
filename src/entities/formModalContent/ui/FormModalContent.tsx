import { FormEvent, ReactElement } from 'react';

import { FormBtns } from '@entities/formButtons';
import { btnsParams } from '@entities/formButtons/ui/FormBtns';
import { isMobileScreen } from '@shared/lib/screenWidth';
import { Icon, IconImg } from '@shared/ui';

import css from './formModalContent.module.css';

type formModalContentProps = {
  onCloseHandler: () => void;
  children: ReactElement;
};

export const FormModalContent = (props: formModalContentProps) => {
  const { onCloseHandler, children } = props;
  const isMobile = isMobileScreen();

  const btns: btnsParams = [
    { title: 'Сохранить', cl: 'fill', clickHandler: () => console.log('safe') },
    { title: 'Отменить', cl: 'outline', clickHandler: onCloseHandler },
  ];

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={css.btnHandler}>
        <p>Подзадача</p>
        {isMobile && (
          <Icon onClickHandler={onCloseHandler}>
            <IconImg type="remove" />
          </Icon>
        )}
        {!isMobile && <FormBtns cl="btns" btns={btns} />}
      </div>
      <div>
        <h1 className={css.title}>Новая запись</h1>
      </div>
      {children}
      {isMobile && <FormBtns cl="mobileBtns" btns={btns} />}
    </form>
  );
};
