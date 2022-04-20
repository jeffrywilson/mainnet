import { useEthers } from "@usedapp/core";

type IModalProps = {
  showModal: boolean,
  setShowModal: (param: boolean) => void
}

export default function Modal({ showModal, setShowModal }: IModalProps) {

  const { activateBrowserWallet, deactivate, account } = useEthers()

  return (
    <>
      {showModal ? (
        /* Overlay Effect */
        <div className={`fixed block inset-0 bg-[#9e7b30] bg-opacity-80 overflow-y-auto h-full w-full z-20 text-white font-smpx px-4`}>
          {/* modal content */}
          <div className="relative p-5 mx-auto bg-[#AC7635] rounded-[60px] shadow-lg top-20 w-[90%] tablet1:w-[30%] text-center">
            <div className="text-[24px] tablet1:text-[36px] flex justify-between">
              <span>Connect Wallet</span>
              <span className="cursor-pointer" onClick={() => setShowModal(false)}>X</span>
            </div>

            <div
              className="flex items-center px-4 py-3 mt-3 cursor-pointer tablet1:px-8 align-center bg-[#513D26] rounded-2xl"
              onClick={() => {
                setShowModal(false);
                activateBrowserWallet()
              }}
            >
              <img src={'/assets/images/metamask.png'} width={45} height={40}></img>
              <span className="text-[32px] ml-5">Metamask</span>
            </div>

            <div className="text-[20px] tablet1:text-[30px] mt-6">
              {account ? (
                <button onClick={() => {
                  setShowModal(false);
                  deactivate();
                }}>Logout</button>
              ) : (
                <button onClick={() => setShowModal(false)}>Close</button>
              )}
            </div>

          </div>
        </div>
      ) : null}
    </>
  )
}