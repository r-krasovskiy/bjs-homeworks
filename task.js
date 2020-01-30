"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
        let x = [];
        let descr = Math.pow(b, 2) - 4 * a * c;
        if (descr < 0) {
            console.log(`The discriminant is negative (${descr}). Equation has no real roots.`);
        } else if (descr = 0) {
            x[0] = (-b + Math.sqrt(descr)) / (2 * a);
        } else {
            x[0] = (-b + Math.sqrt(descr)) / (2 * a);
            x[1] = (-b - Math.sqrt(descr)) / (2 * a);
        }
    return x;
}




function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    marks = [];

    function getAverageMark(marks) {
        let range = marks.length;
        let rangeSum = 0;
        let avgMark;

        if (range > 5) {
            console.log(`There are ${range} marks! Maximum available is 5.`);
            console.log(`Initial 5 marks are: ${marks.slice(0, 5)}.`);
            console.log(`Please delete ${range - 5} mark(s) and try again.`);
        } else {
            for (i = 0; i < range; i++) {
                rangeSum =  rangeSum + marks[i];
                avgMark = rangeSum / range;
            }
            console.log(`The average mark is ${avgMark}.`);
            console.log(`It has been calculated based on ${range} marks.`)
        }
    }
    getAverageMark([5, 4, 5, 4, 5, 2])

    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}