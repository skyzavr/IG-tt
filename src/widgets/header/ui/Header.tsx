import { UserProfile } from '@features/userProfile';

import { Settings } from '@features/settings';
import { Icon, IconImg, Search } from '@shared/ui';
import logo from '/assets/Logo.svg';
import userImg from '/assets/persona.png';

import css from './header.module.css';

export const Header = () => {
  const isMobile = window.innerWidth <= 768;

  const currentUser = {
    title: 'Максим Галактионов',
    imgPath: userImg,
    onClickHandler: () =>
      console.log('I assume there should be a drop-down list here'),
  };

  const onHeaderSearch = (value: string) =>
    console.log(`header search query is ${value}`);

  return (
    <header className={css.wrapper}>
      {isMobile ? (
        <Icon onClickHandler={() => console.log('menu')}>
          <IconImg type="menu" />
        </Icon>
      ) : (
        <img src={logo} alt="simple one" />
      )}
      <div className={css.handleWrapper}>
        <Search title="Поиск" icon="search" onUpdateData={onHeaderSearch} />
        <UserProfile {...currentUser} />
        <Settings />
      </div>
    </header>
  );
};
