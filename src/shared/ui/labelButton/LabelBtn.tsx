import { IconImg } from '../iconImg/IconImg';

import css from './labelBtn.module.css';

type labelProps = {
  title: string;
  isDeleteBtn?: boolean;
  id: string;
  onUpdate: ({ idRem }: { idRem: string }) => void;
};

export const Label = (props: labelProps) => {
  const { title, isDeleteBtn = true, id, onUpdate } = props;

  const onClickHandler = () => {
    if (isDeleteBtn) onUpdate({ idRem: id });
  };

  return (
    <button className={css.wrapper} onClick={onClickHandler}>
      <span> {title}</span>
      {isDeleteBtn && <IconImg type="remove" />}
    </button>
  );
};
