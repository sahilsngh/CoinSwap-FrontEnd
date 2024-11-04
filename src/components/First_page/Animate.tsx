// LogoAnimation.tsx
import React from 'react';
import { motion } from 'framer-motion';
import classes from './First_page.module.css';

interface LogoAnimationProps {
  logoPath: string;
  angleOffset: number;
  distance: number;
  duration: number;
  tiltAngle: number;
  startTop: string;
  startLeft: string;
}

// Define animation variants for each logo
const variants = {
  animate: (custom: {
    angleOffset: number;
    distance: number;
    duration: number;
    tiltAngle: number;
  }) => ({
    x: Math.cos((custom.angleOffset * Math.PI) / 180) * custom.distance,
    y: Math.sin((custom.angleOffset * Math.PI) / 180) * custom.distance,
    rotate: custom.tiltAngle,
    transition: { duration: custom.duration, ease: 'linear' },
  }),
};

const LogoAnimation: React.FC<LogoAnimationProps> = ({
  logoPath,
  angleOffset,
  distance,
  duration,
  tiltAngle,
  startTop,
  startLeft,
}) => {
  return (
    <div className={classes.logo_animation_center}>
      <div
        className={classes.logo_animation_container}
        style={{
          top: startTop,
          left: startLeft,
          position: 'absolute',
        }}
      >
        <motion.div
          custom={{ angleOffset, distance, duration, tiltAngle }}
          variants={variants}
          initial="initial"
          animate="animate" // This will trigger the "animate" variant on render
          className={classes.logo_animation_animated}
        >
          <img src={logoPath} alt="Logo" className={classes.logo_image} />
        </motion.div>
      </div>
    </div>
  );
};

export default LogoAnimation;
