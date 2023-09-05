export default function useShowNumber(number) {
  return number != undefined
    ? number.toString().length > 1
      ? number
      : "0" + number
    : null;
}
