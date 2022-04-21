import React, { FC, Fragment } from "react";

const Lending: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3>Deposit</h3>
        <div className="flex flex-row">
          <input type="text" className="basis-1 bg-[#ce8d3e]"/>
        </div>
      </div>

      <div>
        <h3>Earned</h3>
        <div className="flex flex-row mb-3">
          <input type="text" className="basis-2/3 bg-[#d8a064]" placeholder="USDT/USDC/DAI:" />
          <button className="basis-1/3 ml-5">
            {`WITHDRAW`}
          </button>
        </div>
        <div className="flex flex-row mb-3">
          <input type="text" className="basis-2/3 bg-[#d8a064]" placeholder="UCD:" />
          <button className="basis-1/3 ml-5">
            {`WITHDRAW`}
          </button>
        </div>
        <div className="flex flex-row">
          <input type="text" className="basis-2/3 bg-[#d8a064]" placeholder="STABLE3:" />
          <button className="basis-1/3 ml-5">
            {`WITHDRAW`}
          </button>
        </div>
        
      </div>      
    </Fragment>
  );
};
export default Lending;
