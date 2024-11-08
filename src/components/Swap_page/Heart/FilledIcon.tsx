import { memo, SVGProps } from 'react';

const FilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17 3C14.8 3 13.2 4.2 12 5.5C10.8 4.3 9.2 3 7 3C3.5 3 1 5.9 1 9.5C1 11.3 1.7 12.9 3 14L12 22.5L21 14C22.2 12.8 23 11.3 23 9.5C23 5.9 20.5 3 17 3Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(FilledIcon);
export { Memo as FilledIcon };
