import classNames from 'classnames';

import { IconImg } from '../iconImg/IconImg';
import css from './sideMenuItem.module.css';

type itemProps = {
  title: string;
  content: string;
  menuItemHandler: (value: string) => void;
  currentMenuItem: string | null;
  menuQuery: string;
};

export const SideMenuItem = (props: itemProps) => {
  const { title, content, menuItemHandler, currentMenuItem, menuQuery } = props;

  const currentClass = classNames(
    css.listItem,
    currentMenuItem === title ? css.active : ''
  );

  const getWord = (word: string, query: string) => {
    const firstIndex = word.toLowerCase().indexOf(query);
    const lastIndex = firstIndex + query.length;

    const sentenceBeginning = word.slice(0, firstIndex);
    const sentenceEnding = word.slice(lastIndex);
    const markedWord = (
      <span className={css.marked}>{word.slice(firstIndex, lastIndex)}</span>
    );

    return (
      <>
        {sentenceBeginning}
        {markedWord}
        {sentenceEnding}
      </>
    );
  };

  const getMarkedWord = (word: string) => {
    const currentWord = word.trim();
    const query = menuQuery.toLowerCase().trim();

    if (!currentWord.toLowerCase().includes(query)) return word;
    return getWord(currentWord, query);
  };

  return (
    <>
      <li className={currentClass} onClick={() => menuItemHandler(title)}>
        <span className={css.arrow}>
          <IconImg type="arrow" />
        </span>
        {getMarkedWord(title)}
      </li>
      {currentMenuItem === title && <p className={css.content}>{content}</p>}
    </>
  );
};
