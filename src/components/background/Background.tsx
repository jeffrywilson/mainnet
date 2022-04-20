import { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  image?: string;
  fontFamily?: string;
};

const Background = (props: IBackgroundProps) => (
  <div className={(props.image ? props.image : props.color) + " bg-cover px-5 tablet:px-11 tracking-[0.07em] text-white " + props.fontFamily}>{props.children}</div>
);

export { Background };
