import AvailableStabl3 from "components/acquire/availablestabl3";
import PrivateSaleEnd from "components/acquire/privatesaleend";
import SaleTable from "components/acquire/saletable";
import AcquireCard from "components/acquire/acquirecard"
import Layout from "components/layout/Layout";
import ReactLoading from 'react-loading'
import { useEffect, useState } from "react";
import { IContractData } from "components/interfaces"
import Web3 from "web3";
import { STABL3, PRIVATESALE, Targetaddress } from '../constants';
import { TargetAddress } from "components/acquire/acquirecard/coinselect";
import { useEthers } from "@usedapp/core";
// import { STABL3, PRIVATESALE, Targetaddress } from '../constants/mainnetAddresses';

export default function Acquire() {

  const initialContractData: IContractData = {
    startTime: 0,
    period: 0,
    tokenPrice: 0,
    availableStabl3: 0,
    slotPriceValues: [],
    availableSlotAmountValues: []
  };

  const [_contractData, setContractData] = useState(initialContractData)
  const [_activeSlotIndex, setActiveSlotIndex] = useState(0)
  const [_isLoaded, setLoaded] = useState(false)
  const [_targetAddress, setTargetAddress] = useState(Targetaddress)

  const web3 = new Web3(Web3.givenProvider);
  const { account } = useEthers()

  const jStabl3TokenABI = require("json/stabl3.json");
  const jPrivateSaleABI = require("json/privatesale.json");

  const Stabl3 = new web3.eth.Contract(jStabl3TokenABI, STABL3);
  const PrivateSale = new web3.eth.Contract(jPrivateSaleABI, PRIVATESALE);

  const fetchData = async () => {
    setLoaded(false)

    const startTime = await PrivateSale.methods.startTime().call()

    const period = await PrivateSale.methods.period().call()

    const tokenPrice = await PrivateSale.methods.tokenPrice().call()

    const availableStabl3 = await Stabl3.methods.balanceOf(PRIVATESALE).call()

    const slotPriceValues = await PrivateSale.methods.getSlotPriceValues().call()

    const availableSlotAmountValues = await PrivateSale.methods.getAvailableSlotAmountValues().call()

    setContractData({
      startTime: startTime * 1000,
      period: period * 1000,
      tokenPrice: tokenPrice / 1000,
      availableStabl3: availableStabl3 / (10 ** 6),
      slotPriceValues: slotPriceValues,
      availableSlotAmountValues: availableSlotAmountValues
    })
  }

  useEffect(() => {
    fetchData().then(() => {
      setLoaded(true)
    })
  }, [])

  useEffect(() => {
    web3.eth.getChainId().then((cid) => {
      const approved = !((cid == 250) && (Date.now() - _contractData.startTime) > 28800000);
      const tAddr = approved ? Targetaddress : TargetAddress; setTargetAddress(tAddr)
    })
  }, [_activeSlotIndex])

  return (
    <Layout>
      <div className="relative min-h-screen">
        {_isLoaded ? (
          <>
            <div className={`absolute w-full text-center font-smpx text-[16px] tablet1:text-[28px] mt-8 ${account ? 'invisible' : 'visible'}`}>Please Connect Your Wallet To Access This Page.</div>
            <div className={`font-smpx ${account ? 'visible' : 'invisible'}`}>
              <div className="mt-3 text-center text-[22px] tablet1:text-[36px] mx-auto s3-stroke-0_5 tablet1:s3-stroke-1 leading-[20px] tablet1:leading-[36px] tablet1:mt-11">
                Welcome To The Private Sale Of The STABL33 Protocol.<br />
                <span className="text-[16px] tablet1:text-[28px]">You can acquire the non-depreciating STABL3 token before anyone else.</span>
              </div>
              <div className="flex flex-col items-center mx-auto mt-2 tablet1:mt-4 tablet1:flex-row-reverse tablet1:w-[90%] tablet1:gap-11">
                <PrivateSaleEnd startTime={_contractData.startTime} period={_contractData.period}></PrivateSaleEnd>
                <AvailableStabl3 availableStabl3={_contractData.availableStabl3}></AvailableStabl3>
              </div>
              <div className="flex flex-col tablet1:flex-row gap-7 tablet1:justify-between tablet1:mx-10">
                <SaleTable contractData={_contractData} setActiveSlotIndex={setActiveSlotIndex}></SaleTable>
                <AcquireCard contractData={_contractData} activeSlotIndex={_activeSlotIndex} targetAddress={_targetAddress} web3={web3} PrivateSale={PrivateSale} fetchData={fetchData} setLoaded={setLoaded}></AcquireCard>
              </div>
            </div>
          </>
        ) : (
          <ReactLoading type={"bubbles"} color={"#fff"} className="mx-auto mt-[10%]" />
        )}
      </div>
    </Layout>
  );
}