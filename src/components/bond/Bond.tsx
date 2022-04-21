import React, { FC, Fragment } from "react";

const Bond: FC<{}> = () => {
  return (
    <Fragment>
      <div className="mb-5">
        <h3>Deposit</h3>
        <div className="flex flex-row">
          <select name="deposit" className="deposit basis-1/4">
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="DAI">DAI</option>
          </select>
          <input type="text" className="bg-[#ce8d3e] h-10 w-full !pl-28"/>
        </div>
      </div>

      <div className="mb-3">
        <h3>Receive</h3>
        <div className="flex flex-row">
          <input type="text" className="bg-[#d8a064] h-10 w-full" placeholder="STABL3:"/>
        </div>
      </div>

      <div>
        <h3>Earned</h3>
        <div className="flex flex-row mb-3">
          <input type="text" className="basis-3/4 bg-[#d8a064] mr-10" placeholder="USDT/USDC/DAI:" />
          <button className="basis-1/4">
            {`WITHDRAW`}
          </button>
        </div>
      </div>

      <div className="bottomPanel bg-[#5a442c] !top-[200px]">
        <p>{`Dicsount:`}</p>
        <div className="flex flex-row justify-center">
          <p className="basis-1/5">{`APY:`}</p>
          <p className="basis-2/5">{`LIQUIDITY:`}</p>
          <p className="basis-2/5">{`YOUR WALLET:`}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Bond;
