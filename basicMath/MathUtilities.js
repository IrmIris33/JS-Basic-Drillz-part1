class MathUtilities {


    add(baseValue, valueToAdd){
        let sum = baseValue + valueToAdd;
        return sum;
    }

    subtract(baseValue, valueToAdd){
        let difference = baseValue - valueToAdd;
        return difference;
    }

    divide(baseValue, valueToAdd){
        let division = baseValue / valueToAdd;
        return division;
    }

    multiply(baseValue, valueToAdd){
        let multiply = baseValue * valueToAdd;
        return multiply;
    }
}

module.exports = MathUtilities;