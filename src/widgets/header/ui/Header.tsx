import { UserProfile } from '@features/userProfile';

import { Settings } from '@features/settings';
import { Search } from '@shared/ui';
import logo from '/assets/Logo.svg';
import userImg from '/assets/persona.png';

import css from './header.module.css';

export const Header = () => {
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
      <img src={logo} alt="simple one" className={css.logo} />
      <div className={css.handleWrapper}>
        <Search title="Поиск" icon="search" onUpdateData={onHeaderSearch} />
        <UserProfile {...currentUser} />
        <Settings />
      </div>
    </header>
  );
};
