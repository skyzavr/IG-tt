import { Button } from '@shared/ui';
import css from './btns.module.css';

export type btnsParams = {
  title: string;
  cl: 'fill' | 'outline';
  clickHandler: () => void;
}[];

type fromBtnsProps = {
  cl: string;
  btns: btnsParams;
};

export const FormBtns = ({ cl, btns }: fromBtnsProps) => {
  return (
    <div className={css[cl]}>
      {btns.map(({ cl, title, clickHandler }, i) => (
        <Button cl={cl} onClickHandler={clickHandler} key={i}>
          {title}
        </Button>
      ))}
    </div>
  );
};
