import { useEffect, useState } from 'react';

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const resize = () => setWidth(window.innerWidth);

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        resize();
      }, 300);

    window.addEventListener('resize', timer);

    return () => {
      window.removeEventListener('resize', timer);
    };
  }, []);

  return width;
};
