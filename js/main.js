function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive();

// проверка максимальной длинны строки с урезанием одного символа и подставкой символа три точки
// function checkingLengthString (str, maxlength) {
//   return (str.length > maxlength) ?  `${str.slice(0, maxlength - 1)  }…` : str;
// }
// checkingLengthString ();

function calcLengthString (str, maxLength) {
  return str.length <= maxLength;
}

calcLengthString();


