export const formatNumber = (num: number | string) => {
  return Number(num).toLocaleString('da-DK')
}

export const formatCurrency = (num: number | string) => {
  return "$" + formatNumber(num)
}