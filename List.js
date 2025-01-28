function arrayToList(arr) {
   // {value: 1 , rest: null}
   if (arr.length === 0) {
      return null
   }
   let returnValue = {
      value: arr[0],
      rest: arrayToList(arr.slice(1))
   }
   return returnValue
}




const exampleList = {
   value: 10, rest:
   {
      value: 20, rest:
      {
         value: 30, rest: null
      }
   }
}



function listToArray(list) {

}


//console.log(exampleList[0])




const array = [5, 6, 8, 3, 2]

// accessing to array 
//console.log(array[2])

const objectEx = {
   name: 'cristina',
   age: 24,
   children: {
      name: 'leonardo',
      age: 3
   },
   job: {
      name: 'athlete',
      sport: 'swimming',
      raceWins: [2022,2023,2026,2028, 2029, 2068, 3040]
   }
}
const raceWinsLength = objectEx.job.raceWins.length
// access to the object
console.log(objectEx.job.raceWins[raceWinsLength - 1])

//console.log(arrayToList([10, 20, 30]));
// {value: 1, rest: null}


// nonsense

//    function listToArray(arrayToList) {
//       //create a new array that holds the values
//       let newArray = []
//       let currentValue = 0
//       // looping trough all the items in the list until null appears
//       for (let i = 0; i === null; i++) {
//          // storing the current value
//          currentValue = arr[i]
//          // adding the current value to the new array
//          newArray = arr.push(currentValue)
//       }
//    } return newArray