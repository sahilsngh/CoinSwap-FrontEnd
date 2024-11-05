import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { WalletAddIcon } from './WalletAddIcon';
import classes from './WalletAdd_StyleLinear.module.css';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearWalletAdd?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearWalletAdd?: ReactNode;
  };
}
/* @figmaId 1:4450 */
export const WalletAdd_StyleLinear: FC<Props> = memo(function WalletAdd_StyleLinear(props = {}) {
  return (
    <div className={`${resets.webViewResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearWalletAdd || ''} ${classes.vuesaxLinearWalletAdd}`}>
        {props.swap?.vuesaxLinearWalletAdd || <WalletAddIcon className={classes.icon} />}
      </div>
    </div>
  );
});
