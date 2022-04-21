import React, { FC, Fragment } from "react";

const ExcahngeTab: FC<{}> = () => {
  return (
    <Fragment>
      <div className="mb-5">
        <h3>Deposit</h3>
        <div className="flex flex-row">
          <select name="deposit" className="deposit basis-1/4">
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="DAI">DAI</option>
            <option value="UCD">UCD</option>
          </select>
          <input type="text" className="bg-[#ce8d3e] h-10 w-full !pl-28"/>
        </div>
      </div>

      <div className="mb-3">
        <h3>Receive</h3>
        <div className="flex flex-row">
          <select name="deposit" className="deposit basis-1/4">
            <option value="STABL3">STABL3</option>
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="DAI">DAI</option>
          </select>
          <input type="text" className="bg-[#ce8d3e] h-10 w-full !pl-28"/>
        </div>
        
        
        <div className="flex justify-center mt-10">
          <button className="w-60">
            {`EXCAHNGE`}
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default ExcahngeTab;
