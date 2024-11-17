import { ChangeEvent, useState } from 'react';

import { onUpdateData } from '@type/fieldGroups';
import { Icon, IconImg, TextField } from '@shared/ui/index';
import { getDataFormat } from '@shared/lib/dataFormat';

import css from './calendarPicker.module.css';

type calendarProps = {
  init: string;
  title: string;
  type: string;
};
export const CalendarPicker = ({ init, title, type }: calendarProps) => {
  const [data, setData] = useState(getDataFormat(init));
  const [defaultFormat, setDefaultFormat] = useState(init);
  const onHandler: onUpdateData = ({ value }) => {
    console.log({ type, value });
  };

  const onPickData = (e: ChangeEvent<HTMLInputElement>) => {
    setDefaultFormat(e.target.value);
    setData(getDataFormat(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <TextField
        title={title}
        type="data"
        init={data}
        onUpdateData={onHandler}
        isDisabled
      />
      <span className={css.datePicker}>
        <Icon>
          <IconImg type="calendar" />
        </Icon>
        <input
          type="date"
          className={css.calendar}
          value={defaultFormat}
          onChange={onPickData}
        />
      </span>
    </div>
  );
};
