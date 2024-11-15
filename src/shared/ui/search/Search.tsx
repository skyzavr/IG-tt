import { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';

import { useDebounce } from '@shared/lib/useDebounce';
import css from './search.module.css';

type searchProps = {
  title: string;
  icon: 'search' | 'filter';
  onUpdateData: (value: string) => void;
  init?: string;
};

export const Search = (props: searchProps) => {
  const { title, icon, onUpdateData, init = '' } = props;

  const cl = classNames(css.searchWrapper, css[icon]);

  const [value, setValue] = useState<string>(init);
  const debounce = useDebounce(value, 500);

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onUpdateData(value);
  }, [debounce]);

  return (
    <>
      <input
        className={cl}
        type="search"
        placeholder={title}
        value={value}
        onChange={(e) => onSearchHandler(e)}
      />
    </>
  );
};
