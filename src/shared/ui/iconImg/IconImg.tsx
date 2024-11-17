import { icons } from './iconSet';

type iconProps = {
  type:
    | 'settings'
    | 'bookmarks'
    | 'filter'
    | 'add'
    | 'search'
    | 'remove'
    | 'calendar'
    | 'unPin'
    | 'menu'
    | 'arrow'
    | 'delete';
};

export const IconImg = ({ type }: iconProps) => {
  return icons[type];
};
