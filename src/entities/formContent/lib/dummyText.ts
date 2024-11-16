import { descriptionFields } from '@type/fieldGroups';

type getDummyDataParams = (
  list: { [key: string]: string },
  onUpdateData: ({ type, value }: { type: string; value: string }) => void
) => descriptionFields[];

export const getDummyData: getDummyDataParams = (list, onUpdateData) => {
  const { title, status, description, platform, notes, priority } = list;
  return [
    {
      title: 'Тема',
      init: title,
      type: 'title',
      isRequired: true,
      onUpdateData,
    },
    {
      title: 'Статус',
      init: status,
      type: 'status',

      onUpdateData,
    },
    {
      title: 'Описание',
      init: description,
      type: 'description',

      onUpdateData,
    },
    {
      title: 'Продукт',
      init: platform,
      type: 'platform',

      onUpdateData,
      button: {
        type: 'search',
        onHandler: () => console.log('do something'),
      },
    },
    {
      title: 'Рабочие заметки',
      init: notes,
      type: 'notes',
      isRequired: true,
      onUpdateData,
    },
    {
      title: 'Приоритет',
      init: priority,
      type: 'priority',

      onUpdateData,
    },
  ];
};
