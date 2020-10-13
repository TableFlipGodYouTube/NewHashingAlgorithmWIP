const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ".",
  ",",
  "/",
  "?",
  "]",
  "[",
  "{",
  "}",
  "\\",
  "|",
  "=",
  "+",
  "-",
  "_",
  "0",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  ")",
  "(",
  "*",
  "&",
  "^",
  "%",
  "$",
  "#",
  "@",
  "!",
  "`",
  "~",
  " ",
  '"',
  "'",
  ";",
  ":",
  "<",
  ">",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

let parsedLetters = [];

function determineOdd(k) {
  if ((k / 2) % 2 === 0) {
    return k / 2;
  } else {
    return null;
  }
}

function determineOdd2(k) {
  if ((k / 4) % 2 === 0) {
    return true;
  } else {
    return null;
  }
}
let temporyary = 7;
parsedLetters.push(null);
parsedLetters.push(null);
parsedLetters.push(null);
parsedLetters.push(null);
parsedLetters.push(null);
parsedLetters.push(null);
let alphaIndex = 0;
while (alphaIndex < letters.length) {
  let comp = determineOdd2(temporyary);
  if (comp != null) {
    parsedLetters.push(letters[alphaIndex]);
    alphaIndex = alphaIndex + 1;
    //console.log("Allowed: " + temporyary);
  } else {
    parsedLetters.push(null);
  }
  temporyary = temporyary + 1;
}
console.log(parsedLetters);
function encodet(f) {
  let final = "";
  for (let i = 0; i < f.length; i++) {
    let temp = 0;
    temp = parsedLetters.indexOf(f[i]) / 3;

    console.log(temp);
    final = final + parsedLetters[temp];
  }
  return final;
}

function decodet(f) {
  let final = "";
  for (let i = 0; i < f.length; i++) {
    let temp = 0;
    temp = parsedLetters.indexOf(f[i]) * 2;
    console.log(temp);
    final = final + parsedLetters[temp];
  }
  return final;
}
let codec = encodet("Ok");
console.log("Encypted: " + codec);
console.log("Decrypted: " + decodet("M"));
