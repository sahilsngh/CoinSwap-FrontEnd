import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { First_page } from './components/First_page/First_page';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.webViewResets} ${classes.root}`}>
      <First_page />
    </div>
  );
});

