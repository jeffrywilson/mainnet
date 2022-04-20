type ITypeDocIcon = {
  name: string
}

export default function DocIcon({name}: ITypeDocIcon) {
  let imageName = "Whitepaper_Icon_final.png", text = "Whitepaper", fileName = "STABL33_PROTOCOL_Whitepaper.pdf";
  if (name == "deck") {
    imageName = "Investor_Deck_Icon_final.png"
    text = "Investor Deck"
    fileName = "Stabl33_Protocol_Investor_deck.pdf"
  }

  return (
    <a className="flex flex-col w-[23%] tablet1:w-[10%] items-center justify-center cursor-pointer" target={"_blank"} href={`/assets/docs/${fileName}`}>
      <img src={`/assets/images/${imageName}`} className="w-[40px] h-[40px] tablet1:w-[70px] tablet1:h-[70px]" ></img>
      <div className="text-center font-smpx text-[14px] tablet1:text-[20px]">{text}</div>
    </a>
  )
}