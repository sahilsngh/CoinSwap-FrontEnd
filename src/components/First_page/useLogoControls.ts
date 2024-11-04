// useLogoControls.ts
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useLogoControls = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate"); // Start the 'animate' state for all logos
  }, [controls]);

  return controls;
};
