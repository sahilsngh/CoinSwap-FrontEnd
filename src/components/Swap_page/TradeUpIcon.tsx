import { memo, SVGProps } from 'react';

const TradeUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M16.6667 10.8333V6.66667H12.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M16.6673 6.66699L12.5007 10.8337C11.7652 11.5692 11.3975 11.9368 10.9462 11.9775C10.8715 11.9842 10.7965 11.9842 10.7218 11.9775C10.2705 11.9368 9.90282 11.5692 9.16732 10.8337C8.43182 10.0982 8.06411 9.73049 7.61279 9.68983C7.53818 9.68308 7.46312 9.68308 7.38851 9.68983C6.93719 9.73049 6.56945 10.0982 5.83398 10.8337L3.33398 13.3337'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(TradeUpIcon);
export { Memo as TradeUpIcon };
