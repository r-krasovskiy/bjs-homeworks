//Assignment 1
function getSolutions(a, b, c) {
    let roots = [];
    let D = Math.pow(b, 2) - 4 * a * c;
    if (D < 0) {
        return {D: D, roots: roots};
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        let roots = [x1];
        return {D: D, roots: roots}
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        let roots = [x1, x2];
        return {D: D, roots: roots}
    }
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни вадратного уравнения ${a}² + ${b}x + ${c}`);
    console.log(`Значение дискременанта ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней.`);
    }
    else if (result.D == 0) {
        console.log(`Уравнение имеет один корень: X₁ = ${result.roots}`);
    }
    else {
        console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(4, 20, -3)