import { ChangeEvent, useEffect, useState } from 'react';
import classNames from 'classnames';

import { descriptionFields } from '@type/fieldGroups';
import { useDebounce } from '@shared/lib/useDebounce';
import { Icon, IconImg } from '@shared/ui';

import css from './input.module.css';

export const Input = (props: descriptionFields) => {
  const {
    title,
    type,
    onUpdateData,
    init = '',
    isRequired = false,
    button,
  } = props;

  const [value, setValue] = useState(init);
  const [error, setError] = useState(false);
  const debounceValue = useDebounce(value, 500);

  const onTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setValue(e.target.value);
  };

  const onErrorHandler = () => {
    if (value.trim() === '') {
      setError(true);
      return false;
    }
    return true;
  };

  useEffect(() => {
    setValue(init);
  }, [init]);

  useEffect(() => {
    if (!isRequired || onErrorHandler()) return onUpdateData({ type, value });
  }, [debounceValue]);

  return (
    <div className={css.combineBtn}>
      <div className={css.inputWrapper}>
        <label className={css.title}>
          {isRequired && <span className={css.required}>*</span>}
          {title}
        </label>
        <input
          type="text"
          value={value}
          onChange={onTextHandler}
          className={classNames(css.textField, error ? css.error : '')}
        />
      </div>
      {button && (
        <Icon onClickHandler={button.onHandler}>
          <IconImg type={button.type} />
        </Icon>
      )}
    </div>
  );
};
