import Web3 from "web3";
import { Dispatch, useState } from "react";
import CoinSelect from "./coinselect";
import { IContractData } from "components/interfaces";
import { DAI, USDT, USDC } from "../../../constants";
// import { DAI, USDT, USDC } from "../../../constants/mainnetAddresses";
import { formatNumber } from "utils/formatter";
import { useEthers } from "@usedapp/core";

type IAcquireCardProps = {
  contractData: IContractData, 
  activeSlotIndex: number,
  targetAddress: string,
  web3: Web3, 
  PrivateSale: any,
  fetchData: any,
  setLoaded: Dispatch<any>,
}

export default function AcquireCard({contractData, activeSlotIndex, targetAddress, web3, PrivateSale, fetchData, setLoaded}: IAcquireCardProps) {

  const [_activeCoinIndex, setActiveCoinIndex] = useState(0)

  const { account } = useEthers()
  
  
  const jDaiABI = require("json/dai.json");
  const jUsdtABI = require("json/usdt.json");
  const jUsdcABI = require("json/usdc.json");
  const Dai = new web3.eth.Contract(jDaiABI, DAI);
  const Usdt = new web3.eth.Contract(jUsdtABI, USDT);
  const Usdc = new web3.eth.Contract(jUsdcABI, USDC);
  const coinAddresses = [DAI, USDT, USDC] // DAI, USDT, USDC  

  const handleExchangeClick = async () => {
    if (activeSlotIndex < 1) {
      alert("Please choose slot.")
      return;
    }
    if (contractData.startTime + contractData.period - Date.now() <= 0) {
      alert("Private Sale is closed.");
      return;
    }

    web3.eth.getAccounts().then(async (accounts) => {
      // const price = (approved ? Number(contractData.slotPriceValues[activeSlotIndex]) : 1000000) * (10 ** 18)
      const activeAccount = accounts[0]
      const price = 1000000 * (10 ** 18)
      const activeCoin = _activeCoinIndex == 0 ? Dai : (_activeCoinIndex == 1 ? Usdt : Usdc)
      const allowanceAmount = await activeCoin.methods.allowance(activeAccount, targetAddress).call()
      if (allowanceAmount < price) {
        await activeCoin.methods.approve(targetAddress, price.toLocaleString('en-US', { useGrouping: false }))
          .send({ from: activeAccount });
      }
      await PrivateSale.methods.buy(coinAddresses[_activeCoinIndex], activeSlotIndex).send({ from: activeAccount });
      fetchData().then(() => setLoaded(true))
    }).catch((e) => { console.log(e) })
  }

  return (
    <div className="tablet1:w-[30%] mt-6">
      <div className="bg-acquirecard bg-cover bg-repeat-round p-3 px-8 tablet1:text-[22px] py-[70px] pb-11">
        <label>Deposit</label>
        <div className="mb-3 output-box">
          <CoinSelect setActiveCoinIndex={setActiveCoinIndex} />
          <div className="pr-5">{formatNumber(contractData.slotPriceValues[activeSlotIndex] ?? 0)}</div>
        </div>
        <label>Receive</label>
        <div className="output-box">
          <div className="pl-3 text-left">STABL3:</div>
          <div className="pr-5">{formatNumber((Number(contractData.slotPriceValues[activeSlotIndex]) / contractData.tokenPrice).toFixed(2))}</div>
        </div>
        <div className="flex justify-center mt-6 tablet1:mt-8 text-[16px] tablet1:text-[20px]">
          {account ? (
            <button className="w-[60%] rounded bg-[#B78854] border" onClick={() => handleExchangeClick()}>EXCHANGE</button>
          ) : (
            <div className="text-center">Connect your wallet to purchase.</div>
          )}
        </div>
      </div>
      <style jsx>{`
        .output-box {
          @apply flex justify-between bg-acquireamount bg-cover bg-repeat-round mx-auto w-[95%] h-[28px] tablet1:h-[36px] items-center
        }

        .output-index option {
          @apply py-2
        }

        select * {
          @apply bg-[#DFCCB7] text-black
        }
      `}</style>
    </div>
  )
}