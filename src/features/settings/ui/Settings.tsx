import { Icon, IconImg } from '@shared/ui';

export const Settings = () => {
  return (
    <Icon onClickHandler={() => console.log('settings')}>
      <IconImg type="settings" />
    </Icon>
  );
};
