import { UserProfile } from '@features/userProfile';

import { Settings } from '@features/settings';
import { Search } from '@shared/ui';
import { isMobileScreen } from '@shared/lib/screenWidth';
import logo from '/assets/Logo.svg';
import userImg from '/assets/persona.png';

import css from './header.module.css';

export const Header = () => {
  const isMobile = isMobileScreen();

  const currentUser = {
    title: 'Максим Галактионов',
    imgPath: userImg,
    onClickHandler: () => {
      console.log(`user name is ${currentUser.title}}`);
    },
  };

  const onHeaderSearch = (value: string) =>
    console.log(`header search query is ${value}`);

  return (
    <header className={css.wrapper}>
      {!isMobile && <img src={logo} alt="simple one" />}
      <div className={css.handleWrapper}>
        <Search title="Поиск" icon="search" onUpdateData={onHeaderSearch} />
        <UserProfile {...currentUser} />
        <Settings />
      </div>
    </header>
  );
};
