// rows loop
let checkboard = "";

for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
  // characters loop
  for (let characterIndex = 0; characterIndex < 8; characterIndex++) {
  if ((rowIndex % 2 === 0 && characterIndex % 2 === 0) || (rowIndex % 2 === 1 && characterIndex %2 === 1)) {
    checkboard = checkboard + "#"
  } else {
    checkboard = checkboard + " "
  }
  } 
  //checkboard = checkboard + "\n"
   }
console.log(checkboard)
