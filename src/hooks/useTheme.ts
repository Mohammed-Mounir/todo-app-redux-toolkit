import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setTheme } from '../store/themeslice';

export function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      htmlElement?.classList.add('dark');
      dispatch(setTheme('dark'));
    } else {
      htmlElement?.classList.remove('dark');
      dispatch(setTheme('light'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleThemeSwitch() {
    const htmlElement = document.querySelector('html');
    if (theme === 'light') {
      dispatch(setTheme('dark'));
      localStorage.setItem('theme', 'dark');
      htmlElement?.classList.add('dark');
    } else {
      dispatch(setTheme('light'));
      localStorage.setItem('theme', 'light');
      htmlElement?.classList.remove('dark');
    }
  }

  return { handleThemeSwitch, theme };
}
