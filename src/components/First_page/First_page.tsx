import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './First_page.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:2828 */
export const First_page: FC<Props> = memo(function First_page(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.about}>
        <div className={classes.frame1437253021}>
          <div className={classes.product}>Product</div>
          <div className={classes.aboutProduct}>About product</div>
          <div className={classes.guide}>Guide</div>
          <div className={classes.frame1437253020}>
            <div className={classes.joinDiscord}>Join Discord</div>
            <div className={classes.discord}></div>
          </div>
        </div>
      </div>
      <div className={classes.ellipse}></div>
      <div className={classes.frame1437253230}>
        <div className={classes.frame14372530341}></div>
        <div className={classes.theUltimatePlatformForTurningC}>
          <div className={classes.textBlock}>The ultimate platform for turning coins into long-term gains. </div>
          <div className={classes.textBlock2}>
            Stake, hold, and grow your assets with strategies designed for degen investors
          </div>
        </div>
      </div>
      <div className={classes.metaborong}>2024 @metaborong all rights reserved</div>
      <div className={classes.isnTJustAFlex}>isn&#39;t just a flex,</div>
      <div className={classes.holding}></div>
      <div className={classes.itIsA}>it is a</div>
      <div className={classes.strategy}></div>
      <div className={classes.launch_app}></div>
      <div className={classes.navigation}>
        <div className={classes.nav_bar}>
          <div className={classes.small_logo}></div>
          <div className={classes.nav_content}>
            <div className={classes.home}>
              <div className={classes.home_logo}></div>
              <div className={classes.home2}>Home</div>
            </div>
            <div className={classes.admin}>
              <div className={classes.admin_logo}></div>
              <div className={classes.admin2}>Admin</div>
            </div>
            <div className={classes.analytics}>
              <div className={classes.analytics_logo}></div>
              <div className={classes.analytics2}>Analytics</div>
            </div>
            <div className={classes.giude}>
              <div className={classes.guide_logo}></div>
              <div className={classes.guide2}>Guide</div>
            </div>
            <div className={classes.about2}>
              <div className={classes.about_logo}></div>
              <div className={classes.about3}>About</div>
            </div>
          </div>
        </div>
        <div className={classes.discord_logo}></div>
      </div>
      <div className={classes.logo}></div>
    </div>
  );
});
