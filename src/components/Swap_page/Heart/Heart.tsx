import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { FilledIcon } from './FilledIcon';
import classes from './Heart.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:4 */
export const Heart: FC<Props> = memo(function Heart(props = {}) {
  return (
    <div className={`${resets.webViewResets} ${classes.root}`}>
      <div className={classes.filled}>
        <FilledIcon className={classes.icon} />
      </div>
    </div>
  );
});
