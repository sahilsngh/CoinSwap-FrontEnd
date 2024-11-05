import { memo, SVGProps } from 'react';

const InformationCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9Z'
      fill='white'
      fillOpacity={0.08}
      stroke='white'
    />
    <path
      d='M9.18165 12.75V9C9.18165 8.64645 9.18165 8.46968 9.07178 8.3598C8.96198 8.25 8.7852 8.25 8.43165 8.25'
      stroke='white'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.994 6H9.00075' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(InformationCircleIcon);
export { Memo as InformationCircleIcon };
