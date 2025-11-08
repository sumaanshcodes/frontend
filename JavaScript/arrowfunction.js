const calculate = (opertion, num1, num2, ...rest) => {
    if(opertion === "add") {
        const  sum = num1 + num2;
        for(const number of rest) {
            sum += number;
        }

        return sum
    } else if(opertion === "subtract") {
        const  difference = num1 - num2;
        