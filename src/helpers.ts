/* eslint-disable radix */
export const getMRZKey = (
  passportNumber: string,
  dateOfBirth: string,
  dateOfExpiry: string
) => {
  // Pad fields if necessary
  const pptNr = pad(passportNumber, 9);
  const dob = pad(dateOfBirth, 6);
  const exp = pad(dateOfExpiry, 6);

  // Calculate checksums
  const passportNrChecksum = calcCheckSum(pptNr);
  const dateOfBirthChecksum = calcCheckSum(dob);
  const expiryDateChecksum = calcCheckSum(exp);

  const mrzKey =
    pptNr +
    passportNrChecksum +
    dob +
    dateOfBirthChecksum +
    exp +
    expiryDateChecksum;

  return mrzKey;
};

const pad = (value: string, fieldLength: number) => {
  // Pad out field lengths with < if they are too short
  const paddedValue = ('<'.repeat(fieldLength) + value).slice(-fieldLength);
  return paddedValue;
};

const calcCheckSum = (checkString: string) => {
  const characterDict: any = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '<': 0,
    ' ': 0,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
    'G': 16,
    'H': 17,
    'I': 18,
    'J': 19,
    'K': 20,
    'L': 21,
    'M': 22,
    'N': 23,
    'O': 24,
    'P': 25,
    'Q': 26,
    'R': 27,
    'S': 28,
    'T': 29,
    'U': 30,
    'V': 31,
    'W': 32,
    'X': 33,
    'Y': 34,
    'Z': 35,
  };

  let sum = 0;
  let m = 0;
  const multipliers: any = [7, 3, 1];

  for (let i = 0; i < checkString.length; i++) {
    const c = checkString.charAt(i);
    const lookup = characterDict[c];
    const number = parseInt(lookup);

    const product = number * multipliers[m];
    sum += product;
    m = (m + 1) % 3;
  }

  return sum % 10;
};
