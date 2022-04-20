import { ReactNode } from 'react';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {/* {props.logo} */}

    <nav>
      <ul className="flex flex-row justify-center mt-5 text-xl font-medium text-gray-800 navbar">
        {props.children}
      </ul>
    </nav>

    <div className="flex justify-center pb-8 mt-8">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>
  </div>
);

export { CenteredFooter };
