const userEnteredVlaue = 0;
let currentResult = userEnteredVlaue; //directly bhi kr skte the??
let logEnteries = [];

//Getting User Input
function getUserInput() {
    return parseInt(userInput.value);
}


//Rendring Data
function createAndWriteOutput(numberBeforeCalc, operator, calcNumber) {
    const calDescription = `calculation: ${numberBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calDescription); //definition on vendor.js, these values redirecting there

}


//Adding 
const addBtnHandler = () => {
    const enteredNumber = getUserInput();
    const initialNumber = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput(initialNumber, '+', enteredNumber);
    logEnteries.push(enteredNumber);
    // console.log(logEnteries);
    // console.log(logEnteries[0]);
    const logEntry = {
        operation: ' ADD ',                 //array ki trah isko bhi globally declare krk yha 1 line me use kese krenge??
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEnteries.push(logEntry);
    console.log(logEnteries);
    console.log(logEntry.operation);
    console.log(logEnteries);

}



//subtracting
const subtrctBtnHandler = () => {
    const enteredNumber = getUserInput();
    const initialNumber = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput(initialNumber, '-', enteredNumber);
    // console.log(currentResult);
    logEnteries.push(enteredNumber);
    console.log(logEnteries);
}


//multiply
const multiplyBtnHandler = () => {
    const enteredNumber = getUserInput();
    const initialNumber = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput(initialNumber, '*', enteredNumber);
    logEnteries.push(enteredNumber);
    console.log(logEnteries);
}

//divide
const divideBtnHandler = () => {
    const enteredNumber = getUserInput();
    const initialNumber = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput(initialNumber, '/', enteredNumber);
    logEnteries.push(enteredNumber);
    console.log(logEnteries);
}



addBtn.addEventListener('click', addBtnHandler);
subtractBtn.addEventListener('click', subtrctBtnHandler);
multiplyBtn.addEventListener('click', multiplyBtnHandler);
divideBtn.addEventListener('click', divideBtnHandler);
