// логическое "И" - &&
//логическое "ИЛИ" - ||

function getRandomRounded() {
    const num = Math.random() * 100;
    const rounded = Math.round(num * 1000) / 1000;
    return rounded;
}

function createArray(day1, day2) { 
    if (!(day1 >= 1 && day1 <= 31 && day2 >= 1 && day2 <= 31 && day2 > day1)) {
        throw new Error("ошибка! неверная дата");
    }  
    else {
        const array = [];

        for (let i = day1; i <= day2; i++) {
            // array.push(`day = ${i} price = ${getRandomRounded()}`);
            array.push(getRandomRounded());
        }
    
        return array;
    }
}

function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    let buyDay = 0;
    let sellDay = 0;
    for (let i = 1; i < prices.length; i++){
        const currentPrice = prices[i];
        // пробуем вычислить потенциальную прибыль, если бы купили по минимальной цене до дня №i и продали по текущей цене
        const potentialProfit = currentPrice - minPrice;

        if (potentialProfit > maxProfit){
            maxProfit = potentialProfit;
            buyDay = 
        }
        if (currentPrice < minPrice){
            minPrice = currentPrice;
        }
    }
    return (maxProfit > 0) ? `максимальная прибыль составляет ${maxProfit}. покупка в день № по цене ` : "невозможно получить прибыль" // тернарный оператор 
    // если maxProfit > 0, то return maxProfit; 
    // иначе return "невозможно получить прибыль"
    
}

let createdArray = createArray(1, 30);
let calculatedMaxProfit = maxProfit(createdArray);

console.log(createdArray);
console.log(calculatedMaxProfit);