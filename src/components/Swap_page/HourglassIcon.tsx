import { memo, SVGProps } from 'react';

const HourglassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.25 1.5V3.75C14.25 6.64949 11.8995 9 9 9M9 9C6.10051 9 3.75 6.64949 3.75 3.75V1.5M9 9C11.8995 9 14.25 11.3505 14.25 14.25V16.5M9 9C6.10051 9 3.75 11.3505 3.75 14.25V16.5'
      stroke='white'
    />
    <path d='M3 1.5H15M15 16.5H3' stroke='white' strokeLinecap='round' />
  </svg>
);

const Memo = memo(HourglassIcon);
export { Memo as HourglassIcon };