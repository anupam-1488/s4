export function allowAlphabetAndSpacesOnly(e) {
  var keyCode = e?.charCode;
  var value = Number(e.target.value + e.key) || 0;
  if (!(keyCode >= 65 && keyCode <= 123) && (keyCode !== 32 && keyCode !== 0) && (keyCode !== 40 && keyCode !== 41)) {
    e.preventDefault();
  }

  else {
    return value
  }
  return false;
}

export function allowAlphabetSpacesSpecialcharacters(e) {
  var keyCode = e.charCode;
  var value = e.target.value + e.key;

  if (
    !((keyCode >= 65 && keyCode <= 123) || // Alphabets range
      (keyCode === 32 || keyCode === 0) ||  // Space and null key
      (keyCode === 45 || keyCode === 44)) ||  // Hyphen '-' and comma ','
    /[0-9]/.test(value) // Prevent numbers
  ) {
    e.preventDefault();  // Prevent input of invalid character
  }
  else {
    return value;  // Allow the character input
  }

  return false;  // Prevent the input event
}

export  function allowNumbersSpecialcharcters(e) {
  var keyCode = e.keyCode === 0 ? e.charCode : e.keyCode;
  var value = e.target.value + e.key;

  if ((keyCode >= 48 && keyCode <= 57) || keyCode === 45 || keyCode === 44) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

export default function allowNumbersOnly(e) {
  var keyCode = e.keyCode === 0 ? e.charCode : e.keyCode;
  var value = Number(e.target.value + e.key) || 0;
  if (keyCode >= 48 && keyCode <= 57) {
    return isValidNumber(value);
  }

  else {
    e.preventDefault();
  }

  return false;

}
const isValidNumber = (number) => {
  return (1 <= number && number <= 10)
}