import CheckBox from "components/checkbox"
import { IContractData } from "components/interfaces"
import { Dispatch } from "react"
import { formatCurrency } from "utils/formatter"

type ISaleTableProps = {
  contractData: IContractData,
  setActiveSlotIndex: Dispatch<any>
}

export default function SaleTable({contractData, setActiveSlotIndex}: ISaleTableProps) {

  const getSlotString = (idx: number) => {
    const n = Number(contractData.availableSlotAmountValues[idx])
    return n ? `${n} Slot${n > 1 ? 's' : ''}` : 'Sold out'
  }

  const handleSlotClick = (idx: number) => {
    if (Number(contractData.availableSlotAmountValues[idx]) <= 0) {
      setActiveSlotIndex(0)
      alert("No more slots left.");
      return;
    }
    setActiveSlotIndex(idx)
  }

  const slotValues = contractData.slotPriceValues.map( (num: number) => formatCurrency(num) )

  return (
    <>
      <table className={`
        text-center  text-[12px] bg-[#BA8853]/80 mt-6 -tracking-[0.015rem]
        tablet1:w-[68%] tablet1:text-[20px] tablet1:tracking-wide`}>
        {/* onClick={(e) => {if ((e.target as Element).className.includes("checkmark")) {e.preventDefault(); return;}}} */}
        <tbody>
          <tr>
            <td colSpan={5} className="bg-[#513D26]">PRIVATE SALE</td>
          </tr>
          <tr className="bg-[#BA8853]/80 leading-[10px] tablet1:leading-5 text-[12px] tablet1:text-[18px] tracking-wider">
            <td className="bg-[#513D26] pt-1 tablet1:pt-2 w-[22%]">
              <b>CLICK</b><br />
              on the slot you are choosing<br />
              <label className="text-[6px] tablet1:text-[12px] -mb-3">&#129147;</label>
            </td>
            <td className="py-1 tablet1:py-2 w-[8%]">STABL3<br />{"$"}<span className="underline">{(contractData.tokenPrice).toFixed(3).toString().replace(".", ",")}</span></td>
            <td className="py-1 tablet1:py-2 w-[22%]">Revenue Share / Year</td>
            <td className="py-1 tablet1:py-2 w-[24%]">Estimated <span className="underline">EXTRA</span> Revenue / Year</td>
            <td className="py-1 tablet1:py-2 w-[24%]">Investment</td>
          </tr>
          <tr>
            <td className="bg-[#513D26]">
              <label className="cursor-pointer" onClick={() => handleSlotClick(1)}>{getSlotString(1)}</label>
            </td>
            <td><CheckBox id="row1"></CheckBox></td>
            <td>10% for 2 Years</td>
            <td rowSpan={4} className="tracking-widest">≈20-50%&gt;</td>
            <td>{slotValues[1]}</td>
          </tr>
          <tr>
            <td className="bg-[#513D26]">
              <label className="cursor-pointer" onClick={() => handleSlotClick(2)}>{getSlotString(2)}</label>
            </td>
            <td><CheckBox id="row2"></CheckBox></td>
            <td>0,8%</td>
            <td>{slotValues[2]}</td>
          </tr>
          <tr>
            <td className="bg-[#513D26]">
              <label className="cursor-pointer" onClick={() => handleSlotClick(3)}>{getSlotString(3)}</label>
            </td>
            <td><CheckBox id="row3"></CheckBox></td>
            <td>0.25%</td>
            <td>{slotValues[3]}</td>
          </tr>
          <tr>
            <td className="bg-[#513D26]">
              <label className="cursor-pointer" onClick={() => handleSlotClick(4)}>{getSlotString(4)}</label>
            </td>
            <td><CheckBox id="row4"></CheckBox></td>
            <td>0,03%</td>
            <td>{slotValues[4]}</td>
          </tr>
          <tr>
            <td className="bg-[#513D26]">
              <label className="cursor-pointer" onClick={() => handleSlotClick(5)}>{getSlotString(5)}</label>
            </td>
            <td><CheckBox id="row5"></CheckBox></td>
            <td className="text-black font-extrabold text-[20px] tablet1:text-[30px] leading-4">&times;</td>
            <td className="text-black font-extrabold text-[20px] tablet1:text-[30px] leading-4">&times;</td>
            <td>{slotValues[5]}</td>
          </tr>
          <tr>
            <td className="bg-[#513D26]">
              <label className="cursor-pointer" onClick={() => handleSlotClick(6)}>{getSlotString(6)}</label>
            </td>
            <td><CheckBox id="row6"></CheckBox></td>
            <td className="text-black font-extrabold text-[20px] tablet1:text-[30px] leading-4">&times;</td>
            <td className="text-black font-extrabold text-[20px] tablet1:text-[30px] leading-4">&times;</td>
            <td>{slotValues[6]}</td>
          </tr>
          <tr>
            <td className="bg-[#513D26]">
              <label className="cursor-pointer" onClick={() => handleSlotClick(7)}>{getSlotString(7)}</label>
            </td>
            <td><CheckBox id="row7"></CheckBox></td>
            <td className="text-black font-extrabold text-[20px] tablet1:text-[30px] leading-4">&times;</td>
            <td className="text-black font-extrabold text-[20px] tablet1:text-[30px] leading-4">&times;</td>
            <td>{slotValues[7]}</td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        td {
          @apply border-collapse border tablet1:border-[2px] border-[#D6D2CC] px-1 tablet1:px-2
        }
      `}</style>
    </>
  )
}