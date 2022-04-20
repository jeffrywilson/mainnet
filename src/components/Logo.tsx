import Image from 'next/image';
// import { AppConfig } from '../utils/AppConfig';

const Logo = () => {
  return (
    <span className={`text-gray-900 inline-flex items-center `}>
      <Image src='/assets/images/logo.png' width={88} height={80} layout='fixed' draggable={false}></Image>
        
      {/* {AppConfig.site_name} */}
    </span>
  );
};

export { Logo };
