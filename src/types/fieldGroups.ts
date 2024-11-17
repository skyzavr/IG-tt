import { icons } from './icons';

type handlerProps = { type: string; value: string };

export type onUpdateData = ({ type, value }: handlerProps) => void;

export type descriptionFields = {
  title: string;
  init: string;
  type: string;
  onUpdateData: onUpdateData;
  isRequired?: boolean;
  button?: { type: icons; onHandler: () => void };
  isDisabled?: boolean;
};
