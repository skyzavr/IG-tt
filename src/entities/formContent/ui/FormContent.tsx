import * as dd from '@widgets/mainContent/lib/dummyData';
import { CalendarPicker, LabelWrapper, TextField } from '@shared/ui';
import { getDummyData } from '../lib/dummyText';

import css from './formContent.module.css';

type formContentProps = {
  taskList: { [key: string]: string };
  onUpdateData: ({ type, value }: { type: string; value: string }) => void;
};

export const FormContent = ({ taskList, onUpdateData }: formContentProps) => {
  const textFieldsDescription = getDummyData(taskList, onUpdateData);

  return (
    <>
      <div className={css.contentWrapper}>
        {textFieldsDescription.map((field) => (
          <TextField {...field} key={field.type} />
        ))}
      </div>
      <div className={css.contentWrapperLabel}>
        <LabelWrapper title="Ответственный" data={dd.responsiblePerson} />
        <LabelWrapper title="Группа" data={dd.group} />
      </div>
      <LabelWrapper
        title="Согласующие"
        data={dd.responsiblePeopleList}
        isRemovable={true}
      />
      <TextField
        title="Комментарии"
        init=""
        type="comments"
        onUpdateData={() => console.log('comm')}
      />
      <div className={css.contentWrapper} style={{ margin: '16px 0' }}>
        <CalendarPicker init="" title="Когда открыто" type="startDate" />
        <CalendarPicker
          init="2024-10-22"
          title="Когда создано"
          type="endDate"
        />
      </div>
      <div className={css.contentWrapperLabel}>
        <LabelWrapper title="Кем открыто" data={dd.openedByPerson} />
        <LabelWrapper title="Кем создано" data={dd.closedByPerson} />
      </div>
    </>
  );
};
