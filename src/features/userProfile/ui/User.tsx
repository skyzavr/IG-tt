import css from './user.module.css';

type userProps = {
  title: string;
  onClickHandler: () => void;
  imgPath: string;
};

export const User = (props: userProps) => {
  const { title, onClickHandler, imgPath } = props;

  return (
    <div onClick={onClickHandler} className={css.userProfile}>
      <img src={imgPath} alt={`${title}'s img`} className={css.userImg} />
      <p className={css.userName}>{title}</p>
    </div>
  );
};
