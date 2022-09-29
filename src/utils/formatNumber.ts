const formatterDecimals = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 3,
});
const formatterInt = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
});

export function formatNumber(
  rawNum: number | string,
  withDecimals = true
): string {
  const num = typeof rawNum === "number" ? rawNum : parseFloat(rawNum);
  const formatter = withDecimals ? formatterDecimals : formatterInt;
  return formatter.format(num);
}