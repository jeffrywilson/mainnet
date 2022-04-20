export interface IContractData {
  startTime: number,
  period: number,
  tokenPrice: number,
  availableStabl3: number,
  slotPriceValues: number[],
  availableSlotAmountValues: number[]
}

export interface IApproval {
  id: number,
  from: string,
  coin: string,
  amount: number,
  checked: boolean,
  dateCreated: string
}