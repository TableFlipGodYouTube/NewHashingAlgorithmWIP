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
function insertString(string, index, tooadd) {
  let origString = string;
  let stringToAdd = tooadd;
  let indexPosition = index;

  // Split the string into individual
  // characters
  origString = origString.split("");

  // Insert the string at the index position
  origString.splice(indexPosition, 0, stringToAdd);

  // Join back the individual characters
  // to form a new string
  return origString.join("");
}
function add_character(str, toadd, pos) {
  var a = str;
  var b = toadd;
  var position = pos;
  return [a.slice(0, position), b, a.slice(position)].join("");
}
function EncodeWithSalt(input, salt) {
  let sult = "";
  let sult2 = "";
  for (let i = 0; i < salt.length; i++) {
    sult = sult + Encode(salt[i]);
  }
  for (let i = 0; i < sult.length; i++) {
    sult2 = sult2 + Encode(sult[i]);
  }
  //Append at 4th pos
  console.log(sult2);
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
  let indexes = [];
  for (let i = 0; i < final.length; i++) {
    indexes.push(i * 2);
  }
  for (let i = 0; i < indexes.length; i++) {
    console.log("index" + indexes[i]);
  }
  let f2 = "";
  for (let i = 0; i < sult2.length; i++) {
    console.log("OK" + final);
    f2 = f2 + insertString(final, indexes[i], sult[i]);
  }
  return f2;
}

function remove_character(str, char_pos) {
  let part1 = str.substring(0, char_pos);
  let part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}

function DecodeWithSalt(input) {
  let final = "";
  let final2 = "";
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
  for (let i = 0; i < final.length; i++) {
    final2 = final + remove_character(final, 3);
  }
  return final2;
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
let ok = EncodeWithSalt("test", "keklord");
//ok = Encode("keklord");
//Qefp!fp!kbt!BkWlafkd
console.log("Encoded: " + ok);
console.log("Decoded: " + Decode(ok));
