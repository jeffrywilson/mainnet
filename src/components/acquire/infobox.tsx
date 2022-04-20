export default function InfoBox(props: {label: string, value: string}) {
  return (
    <div className={`
      bg-privatesaleinfo bg-cover bg-repeat-round 
      py-1 pl-[5%]
      text-[14px] tablet1:text-[24px] tracking-[0.15em]
      w-[88%] 
      my-2 
      flex gap-1 tablet1:gap-6`}>
      <span>{`${props.label}:`}&nbsp;&nbsp;&nbsp;</span>
      <span>{props.value}</span>
    </div>
  )
}