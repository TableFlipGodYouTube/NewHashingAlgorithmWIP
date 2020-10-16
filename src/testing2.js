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
newTable.push("Z");
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push("Y");
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push("X");
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
newTable.pop(undefined);
iter = -1;
temp = 0;
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
newTable.pop(undefined);
iter = -1;
temp = 0;
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
newTable.pop(undefined);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push("a");
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push("b");
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push("c");
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
newTable.push(null);
//console.log(newTable);
function Encode1(input) {
  let final = "";
  for (let i = 0; i < input.length; i++) {
    let temp = "";
    if (newTable.indexOf(input[i]) - 24 < 8) {
      let Diff = newTable.indexOf(input[i]) - 24;
      //console.log("Diff" + Diff);
      temp = temp + Diff - 24 * -1;
      //console.log("Diff temp: " + temp);
    } else {
      temp = temp + newTable.indexOf(input[i]) - 24;
    }
    final = final + newTable[temp];
  }
  return final;
}
function Encode(input) {
  let final = "";
  for (let i = 0; i < input.length; i++) {
    let temp = "";
    if (newTable.indexOf(input[i]) - 24 > newTable.length) {
      let Diff = newTable.indexOf(input[i]) - 24;
      console.log("DDiff" + Diff);
      temp = Diff;
      //console.log("DDiff temp: " + temp);
    }
    if (newTable.indexOf(input[i]) - 24 < 32) {
      let Diff = newTable.indexOf(input[i]) - 24;
      //console.log("DDDDIFFF: " + Diff);
      //console.log("Letter: " + newTable[newTable.indexOf(input[i]) - 24] + " " + input[i]);
      //*****************8 */
      temp = newTable.indexOf(input[i]) - 24;
    } else {
      temp = newTable.indexOf(input[i]) - 24;
      //console.log("pp" + temp);
    }
    final = final + newTable[temp];
  }
  return final;
}

function EncodeWithSalt(input, salt) {
  let final = "";
  for (let i = 0; i < input.length; i++) {
    let temp = "";
    if (newTable.indexOf(input[i]) - 24 > newTable.length) {
      let Diff = newTable.indexOf(input[i]) - 24;
      console.log("DDiff" + Diff);
      temp = Diff;
      //console.log("DDiff temp: " + temp);
    }
    if (newTable.indexOf(input[i]) - 24 < 32) {
      let Diff = newTable.indexOf(input[i]) - 24;
      //console.log("DDDDIFFF: " + Diff);
      //console.log("Letter: " + newTable[newTable.indexOf(input[i]) - 24] + " " + input[i]);
      //*****************8 */
      temp = newTable.indexOf(input[i]) - 24;
    } else {
      temp = newTable.indexOf(input[i]) - 24;
      //console.log("pp" + temp);
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
      //console.log("DDiff" + Diff);
      temp = temp + Diff + 24 * -1;
      //console.log("DDiff temp: " + temp);
    }
    if (newTable.indexOf(input[i]) + 24 < 32) {
      let Diff = newTable.indexOf(input[i]) + 24;
      if (newTable[newTable.indexOf(input[i])] === "Z") {
        temp = newTable.indexOf(input[i]) + 40;
      } else {
        //console.log("Letter: " + newTable[newTable.indexOf(input[i]) + 24]);
        temp = Diff;
      }
    } else {
      temp = newTable.indexOf(input[i]) + 24;
      //console.log(newTable.indexOf(input[i]) + 24);
    }
    final = final + newTable[temp];
  }
  return final;
}
let ok = Encode("test");
//Qefp!fp!kbt!BkWlafkd
console.log("Encoded: " + ok);
console.log("Decoded: " + Decode(ok));
