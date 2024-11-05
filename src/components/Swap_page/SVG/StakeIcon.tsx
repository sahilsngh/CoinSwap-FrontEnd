import { memo, SVGProps } from 'react';

const StakeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 4.5C8.48527 4.5 10.5 3.82843 10.5 3C10.5 2.17157 8.48527 1.5 6 1.5C3.51472 1.5 1.5 2.17157 1.5 3C1.5 3.82843 3.51472 4.5 6 4.5Z'
      stroke='white'
    />
    <path
      d='M11.625 6.75C8.93265 6.75 6.75 8.93257 6.75 11.625C6.75 14.3173 8.93265 16.5 11.625 16.5C14.3173 16.5 16.5 14.3174 16.5 11.625C16.5 8.93257 14.3173 6.75 11.625 6.75Z'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.625 14.25C11.7035 14.25 11.7765 14.2129 11.9225 14.1387L13.096 13.5423C13.6153 13.2784 13.875 13.1464 13.875 12.9375V10.3125M11.625 14.25C11.5465 14.25 11.4735 14.2129 11.3275 14.1387L10.1539 13.5423C9.63465 13.2784 9.375 13.1464 9.375 12.9375V10.3125M11.625 14.25V11.625M13.875 10.3125C13.875 10.1035 13.6153 9.97162 13.096 9.7077L11.9225 9.1113C11.7765 9.03713 11.7035 9 11.625 9C11.5465 9 11.4735 9.03713 11.3275 9.1113L10.1539 9.7077C9.63465 9.97162 9.375 10.1035 9.375 10.3125M13.875 10.3125C13.875 10.5214 13.6153 10.6534 13.096 10.9173L11.9225 11.5137C11.7765 11.5879 11.7035 11.625 11.625 11.625M9.375 10.3125C9.375 10.5214 9.63465 10.6534 10.1539 10.9173L11.3275 11.5137C11.4735 11.5879 11.5465 11.625 11.625 11.625'
      stroke='white'
      strokeLinejoin='round'
    />
    <path
      d='M1.5 3V6.01628V9.03255C1.5 9.56047 2.38375 10.2246 4.59736 10.5M1.58044 6.41076C2.48371 7.20724 4.09411 7.54515 5.81519 7.54515M10.4913 3.091V4.60198'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(StakeIcon);
export { Memo as StakeIcon };