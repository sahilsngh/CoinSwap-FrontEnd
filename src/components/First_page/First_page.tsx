import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoAnimation from './Animate';
import classes from './First_page.module.css';
import resets from '../_resets.module.css';

interface Props {}

export const First_page: FC<Props> = memo(function First_page(props = {}) {

  const navigate = useNavigate();

  const handleLaunchAppClick = () => {
    navigate('/swap'); // Update the route to the path for Swap_app
  };

  return (
    <div className={`${resets.webViewResets} ${classes.root}`}>
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
      <div className={classes.itIsA}>it is a  </div>
      <div className={classes.strategy}></div>
      <div className={classes.launch_app} onClick={handleLaunchAppClick}></div>
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

      {/* Animation */}
      <LogoAnimation
        logoPath="/assets/animation/kermit-logo.png"
        angleOffset={30}
        distance={300}
        duration={1}
        tiltAngle={0}
        startTop="640px"
        startLeft="658px"
      />
      <LogoAnimation
        logoPath="/assets/animation/shiba-logo.png"
        angleOffset={-30}
        distance={200}
        duration={1}
        tiltAngle={0}
        startTop="640px"
        startLeft="658px"
      />
      <LogoAnimation
        logoPath="/assets/animation/ponke-logo.png"
        angleOffset={-120}
        distance={200}
        duration={1}
        tiltAngle={0}
        startTop="640px"
        startLeft="658px"
      />
      <LogoAnimation
        logoPath="/assets/animation/doge-logo.png"
        angleOffset={-150}
        distance={300}
        duration={1}
        tiltAngle={0}
        startTop="640px"
        startLeft="658px"
      />
    </div>
  );
});
