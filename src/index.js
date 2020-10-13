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
function generateHash(salt) {
  let hashedsalt = "";
  if (salt != null) {
    for (var i = 0; i < salt.length; i++) {
      let temp = "";
      if (letters.indexOf(salt[i]) * 4 > letters.length) {
        temp = letters.indexOf(salt[i]) * 4 - letters.length;
        //console.log("Temp: " + temp);
        while (temp > letters) {
          temp = temp - letters.length;
          //console.log("Overflow temp: " + temp);
        }
        //console.log("newdata: " + temp);
      } else {
        temp = letters.indexOf(salt[i]) * 4;
        //console.log("Ok: " + salt[i] + " - " + temp);
      }
      hashedsalt = hashedsalt + letters[temp];
    }
    return hashedsalt;
  }
}
console.log("hashed " + generateHash("kjasdfjlasdkfj"));

function encodet(f) {
  let final = "";
  for (var ii = 0; ii < f.length; ii++) {
    let temp = "";
    if (letters.indexOf(f[ii]) * 4 > letters.length) {
      temp = letters.indexOf(f[ii]) * 4 - letters.length;
      //console.log("Temp: " + temp);
      while (temp > letters) {
        temp = temp - letters.length;
        //console.log("Overflow temp: " + temp);
      }
      //console.log("newdata: " + temp);
    } else {
      temp = letters.indexOf(f[ii]) * 4;
      //console.log("Ok: " + f[ii] + " - " + temp);
    }
    final = final + letters[temp];
  }
  return final;
}

function encode(f, salt) {
  let final = "";
  let finalHash = encodet(salt);
  for (var i = 0; i < salt.length; i++) {
    finalHash = finalHash + encodet(salt[i]);
  }
  let encodedtext = encodet(f);
  for (var e = 0; e < encodedtext.length; e++) {
    for (var ii = 0; ii < finalHash.length; ii++) {
      final = final + encodedtext[e] + finalHash[ii];
    }
  }
  return final;
}

console.log("Hashed with salt " + encode("yes", encodet(generateHash(" "))));
