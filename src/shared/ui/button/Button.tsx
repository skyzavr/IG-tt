import classNames from 'classnames';

import css from './button.module.css';

type btnProps = {
  children: string;
  cl: 'fill' | 'outline';
  onClickHandler: () => void;
};

export const Button = (props: btnProps) => {
  const { children, cl, onClickHandler } = props;
  const clName = classNames(css.btn, css[cl]);

  return (
    <button className={clName} onClick={onClickHandler}>
      {children}
    </button>
  );
};
