import { peopleDef } from '@type/labelGroups';

export const titleInit =
  ' STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller';

export const dataInit = {
  title: titleInit,
  status: 'Новая',
  description: '',
  platform: 'Paltform',
  notes: 'Проверить ACL id=172830402014193655',
  priority: 'Средний',
};

export const responsiblePeopleList: peopleDef = [
  { name: 'Андрей Пивоваров', id: 'ghj' },
  { name: 'Максим Галактионов', id: 'dfg' },
  { name: 'Алла Лин', id: 'asd' },
  { name: 'Константин Константинопольский Константинович', id: 'wer' },
  { name: 'Игорь Иванченко', id: 'wqe' },
  { name: 'Юлия Эйчаровна', id: 'zxc' },
  { name: 'Артём Подпрыгайко-Саппортов', id: 'fhg' },
  { name: 'Илья Вазнец', id: 'rty' },
  { name: 'Михаил Вортенов', id: 'tyu' },
  { name: 'Наталья Нашевна', id: 'iuo' },
  { name: 'Евгения Итамовна', id: 'ert' },
  { name: 'Алиса Киральчук', id: 'qwe' },
];

export const responsiblePerson: peopleDef = [
  { name: 'Константин Константинопольский', id: 'nmp' },
];

export const group: peopleDef = [{ name: 'Support Group', id: 'bhr' }];

export const openedByPerson: peopleDef = [
  { name: 'Андрей Пивоваров', id: 'adc' },
];

export const closedByPerson: peopleDef = [
  { name: 'Андрей Пивоваров', id: 'dnf' },
];
