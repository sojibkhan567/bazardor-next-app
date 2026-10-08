export const convertToBanglaNumber = (number: number) => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

  return String(number).replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
};

// convert english to bangla
export const changeUnitBangla = (unit: string) => {
  if (unit === "kg") {
    return "কেজি";
  } else if (unit === "dozen") {
    return "ডজন";
  } else if (unit === "litre") {
    return "লিটার";
  } else if (unit === "piece") {
    return "পিস";
  } else {
    return "";
  }
};
