import { ReactNode } from "react"

type ICardProps = {
  className?: string;
  backgroundColor?: string;
  children: ReactNode;
}

export const ISOSCard = (props: ICardProps) => {
  return (
    <div className={`${props.className} w-[18%] h-[240px] laptop:h-[350px] bg-cover bg-repeat-round px-2 tablet1:px-4 flex justify-center items-center`}>
      {props.children}
    </div>

  )
}