import { Logo } from 'components/Logo';
import Modal from 'components/modal';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

import { useEthers } from '@usedapp/core';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [_isLoaded, setLoaded] = useState(false)

  const { account } = useEthers()

  const createItem = (link: string, title: string) => {
    return { link, title };
  }

  const navItemList = [
    createItem('/acquire', 'ACQUIRE'),
    createItem('/earn', 'EARN'),
    createItem('/borrow', 'BORROW'),
    createItem('/exchange', 'EXCHANGE'),
    createItem('/blog', 'BLOG'),
  ]

  const ToggleButton = () => (
    <div
      onClick={() => {
        setShowMenu(!showMenu)
      }}
      className="block tablet1:hidden bg-togglebutton bg-cover bg-repeat-round float-right ml-3 w-[60px] h-[36px] my-auto cursor-pointer"
    ></div>
  )

  const ConnectWallet = () => (
    <div className='bg-connectwallet bg-cover bg-repeat-round w-[220px] cursor-pointer font-smpx text-[28px] text-center py-1'
      onClick={() => {
        setShowModal(true)
      }}>
      {!account ? 'Connect Wallet' : (account.substring(0, 6) + "..." + account.slice(-4))}
    </div>
  )

  const router = useRouter();

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <nav className='w-full' >
      <div className="flex flex-col mx-auto laptop:flex-row laptop:justify-between laptop:items-center">
        <div className='flex justify-between'>
          <Link href="/">
            <a><Logo /></a>
          </Link>
          <ToggleButton></ToggleButton>
        </div>
        <div className={`${showMenu ? 'block mb-10' : 'hidden'} laptop:block`} id="mobile-menu">
          <ul className="flex flex-col items-center laptop:items-start laptop:flex-row laptop:self-center text-[36px] font-smpx laptop:gap-[1.4rem] desktop:gap-[3rem]"
            style={{
              WebkitTextStroke: '0.5px black',
              textShadow: '0 1px #987D17, 0 2px #987D17, 0 3px #775A2C'
            }}>
            {navItemList.map((item, index) => (
              <li key={index} className={router.pathname == item.link ? "active" : ""}>
                <Link href={item.link}>
                  <span className='cursor-pointer'>{item.title}</span>
                </Link>
              </li>
            ))}
            <li className='text-center'>
              <ConnectWallet></ConnectWallet>
            </li>
          </ul>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </nav >
  )
};

export { Navbar };