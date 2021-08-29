//1.  
let submissions = [{
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    },
]

//2.  
function addSubmission(array, newName, newScore, newDate) {
    const submission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    array.push(submission);
    console.log(array);
}

//3.  
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

//4.  
function deleteSubmissionByName(array, name) {
    const index = array.findIndex(array => array.name == name)
    array.splice(index, 1)
}

//5.  
function editSubmission(array, index, score) {
    array[index].score = score
    array[index].passed = score >= 60 ? true : false;
}

//6.  
function findSubmissionByName(array, name) {
    return array.find(array => array.name == name)
}

//7.  
//------------------------------------
// function findLowestScore(array) {
//     let minValue = array[0]
//     array.forEach(array => {
//         if (array.score < minValue) {
//             minValue = array
//         }
//     });
//     return minValue
// }
// This is returning only the first object in the array for some reason.  
//------------------------------------

//-----ALTERNATE SOLUTION to 7.  -------
//7.1
function findLowestScore(array) {
    let minValue = Infinity
    array.forEach(array => {
        if (array.score < minValue) {
            minValue = array.score
        }
    });
    return findSubmissionByScore(array, minValue)
}
//7.2  
function findSubmissionByScore(array, score) {
    return array.find(array => array.score == score)
}
//-----ALTERNATE SOLUTION to 7.  -------

//8.  
function findAverageScore(array) {
    let totalScore = 0
    for (let submission of array) {
        totalScore += submission.score
    }
    averageScore = ((totalScore) / (array.length))
    return averageScore
}

//9.  
function filterPassing(array) {
    const passingList = array.filter(array => array.score >= 60)
    return passingList
}

//10.  
function filter90AndAbove(array) {
    const highGrades = array.filter(array => array.score >= 90)
    return highGrades
}