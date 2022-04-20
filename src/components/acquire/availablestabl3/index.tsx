import { formatNumber } from "utils/formatter";
import InfoBox from "../infobox";

type IAvailableStabl3Props = {
  availableStabl3: number
}

export default function AvailableStabl3({ availableStabl3 }: IAvailableStabl3Props) {
  return (
    <InfoBox label="Available STABL3" value={formatNumber(availableStabl3)}></InfoBox>
  )
}