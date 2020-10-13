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

let newTable = [];
function CheckNumber(n) {
  if ((n / 4) % 2 === 0) {
    return "yes";
  } else {
    return null;
  }
}

console.log(CheckNumber(18));
let iter = -1;
let temp = 0;
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
while (iter < letters.length) {
  if (CheckNumber(temp) != null) {
    iter++;
    newTable.push(letters[iter]);
    temp++;
  } else {
    newTable.push(null);
    temp++;
  }
}
console.log(newTable);
function Encode(input) {
  let final = "";
  for (let i = 0; i < input.length; i++) {
    let temp = "";
    if (newTable.indexOf(input[i]) - 24 < 8) {
      let Diff = newTable.indexOf(input[i]) - 24 + 8;
      console.log("Diff" + Diff);
      temp = temp + Diff - 24 * -1;
      console.log("Diff temp: " + temp);
    } else {
      temp = temp + newTable.indexOf(input[i]) - 24;
    }
    final = final + newTable[temp];
  }
  return final;
}
function Decode(input) {
  let final = "";
  for (let i = 0; i < input.length; i++) {
    let temp = "";
    if (newTable.indexOf(input[i]) + 24 > newTable.length) {
      let Diff = newTable.indexOf(input[i]) + 24 - 8;
      console.log("DDiff" + Diff);
      temp = temp + Diff + 24 * -1;
      console.log("DDiff temp: " + temp);
    }
    if (newTable.indexOf(input[i]) - 24 < 8) {
      let Diff = newTable.indexOf(input[i]) - 24 + 8;
      console.log("Diff" + Diff);
      temp = Diff - 24 * -1;
      console.log("Diff temp: " + temp);
    } else {
      temp = newTable.indexOf(input[i]) + 24;
      console.log(newTable.indexOf(input[i]) + 24);
    }
    final = final + newTable[temp];
  }
  return final;
}
let ok = Encode("This isnt cool");
//Qefp!fp!kbt!BkWlafkd
console.log("Encoded: " + ok);
console.log("Decoded: " + Decode(ok));
