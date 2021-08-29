// Extended Challenges:

// 1.  Create a function named createRange
// Parameter(s): start, end
// Functionality: construct and return an array of integers starting 
// with the start parameter and ending at the end parameter. 
// e.g createRange(2, 5) returns [2, 3, 4, 5].

//-------------------------------------
// function createRange(start, end) {
//     range = []
//     let rangeEntrees = .range(start, end) // .range will not work? 
//     for (let rangeEntree of rangeEntrees)
//         let i = start
//     range.splice(i, 1)
//     i = (start += 1)
//         //how can i make it splice in an upward counting fashion?
//         //will I have to create an i+=1 value?
//         //can I just use a push command instead?
//     return range
// }
//---------------------------------------

// 2.  Create a function named countElements
// Parameter(s): array (an array of strings)
// Functionality: construct and return an object with the array values as 
// keys and the number of times that key appears in the array as values. 
// e.g. countElements(['a', 'b', 'a', 'c', 'a', 'b']) returns { a: 3, b: 2, c: 1 }.


//---------------------------------------
// function countElements(array) {

// }
//---------------------------------------




// FINISHED:
// 1.  Declare a variable named submissions that is initialized to an array with 
// the following objects:


// 2.  Declare a function named addSubmission
// Parameter(s): array, newName, newScore, newDate
// Functionality: construct an object and push it into the array. The object 
// must have the same properties as the objects already in the array. 
// Use conditional statements to set the value for the passed property to true 
// if the score is greater than or equal to 60 and false otherwise.


// 3.  Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
// Functionality: remove the object from the array at the specified index using 
// the splice method.


//4.  // Declare a function named deleteSubmissionByName
// Parameter(s): array, name
// Functionality: remove the object from the array that has the provided name.  
// Incorporate the findIndex method and the splice method.

// THOUGHTS:  
// Do we use indexOf(value) as well?
// Plug in index into the deleteSubmissionsByIndex() function after we 
// identify the indices?
//  Sample Solution
// var data = $.grep(data, function(e){ 
//     return e.id != id; 
// });


// 5.  Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object’s score in the array at the specified index. 
// Use conditional statements to set the value for the passed property to 
// true if the score is greater than or equal to 60 and false otherwise.

// Google:  Trying to target and replace score property within array
// array.splice(array.index.score, 1, score)
//must check passed key & update based on edited score    
//passed: newScore >= 60

//THOUGHTS  
// I want to target the key & property of score
// How do I splice the key and property of an object in an array


// 6.  Declare a function named findSubmissionByName
// Parameter(s): array, name
// Functionality: return the object in the array that has the provided name. 
// Use the find method.


// 7.  Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. 
// Use the forEach method to loop through the whole array.
//REFERENCE:
//https://codekila.com/find-max-and-min-value-from-an-array-in-javascript/
//THOUGHTS:
//return minValue - this only gives the actual score, not the object
//NEEDS to return the OBJECT not the key/property, right now
// it only displays the min score value
//Solution:  Created findSubmissionByScore to find the object associated 
//with the score

// 8.  Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

// THOUGHTS:  
// sum of all scores (using a for... of loop) Could it be using a += to add them all?
// divided by array.length


// 9.  // Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. 
// The filter method should find objects in the array that have passing scores.


// 10.  Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter 
// method should find objects in the array that have scores greater than or equal to 90.