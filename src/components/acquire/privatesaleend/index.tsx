import { useEffect, useState } from "react"
import InfoBox from "../infobox"

type IPrivateSaleEndProps = {
  startTime: number,
  period: number
}

export default function PrivateSaleEnd({ startTime, period }: IPrivateSaleEndProps) {
  const [_timeLeft, setTimeLeft] = useState("")

  let x : NodeJS.Timer;
  const count = () => {
    var t = startTime + period - Date.now();
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    if (t < 0) {
      clearInterval(x);
      setTimeLeft("Closed.");
      return;
    }

    var days = (dd < 10 ? "0" + dd : dd).toString();
    var hours = (hh < 10 ? "0" + hh : hh).toString();
    var minutes = (mm < 10 ? "0" + mm : mm).toString();
    var seconds = (ss < 10 ? "0" + ss : ss).toString();

    setTimeLeft(days + ":" + hours + ":" + minutes + ":" + seconds)
  }

  useEffect(() => {
    x = setInterval(count, 1000);
  }, [])

  return (
    <InfoBox label="Private Sale End" value={_timeLeft}></InfoBox>
  )
}