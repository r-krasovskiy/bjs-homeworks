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
        let discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant < 0) {
        x = [];
    } else if (discriminant > 0) {
        x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
        x[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else {
        x[0] = -b  / (2 * a);
    }
    return x;
}



function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    let marksNew = Array.from(marks);
    let range = marksNew.length;
    let rangeSum = 0;
    let averageMark;

    if (range > 5) {
        let marksCut = marksNew.slice(0, 5);
        let rangeCut = marksCut.length;

        for (let i = 0; i < rangeCut; i++) {
            rangeSum =  rangeSum + marksCut[i];
        }
        averageMark = `There are ${range} marks! Maximum available is 5. ${range - 5} surplus mark(s) were removed. Average mark of the first five is ${rangeSum / rangeCut}.`;
    } else {
        for (let i = 0; i < range; i++) {
            rangeSum =  rangeSum + marksNew[i];
        }
        averageMark = `The average mark is ${rangeSum / range}. It has been calculated based on ${range} marks.`;
    }
    return(averageMark);
}


function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let result;
    let visitorYear = dateOfBirthday.getFullYear();
    let today = new Date().getFullYear();
    if (today - visitorYear >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
    console.log(result)
    return result;
}
