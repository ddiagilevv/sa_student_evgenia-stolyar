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
    let minDay = 0; // день покупки по минимальной цене
    let buyDay = -1; // день покупки (результат)
    let sellDay = -1; // день продажи (результат)
    for (let i = 1; i < prices.length; i++){
        console.log(`i = ${i}`);
        console.log(`minPrice = ${minPrice}; maxProfit = ${maxProfit}; minDay = ${minDay}; buyDay = ${buyDay}; sellDay = ${sellDay}`);

        const currentPrice = prices[i]; 
        console.log(`const currentPrice = prices[${i}]; // ${prices[i]}`);
        
        // пробуем вычислить потенциальную прибыль, если бы купили по минимальной цене до дня №i и продали по текущей цене
        const potentialProfit = currentPrice - minPrice;
        console.log(`const potentialProfit = currentPrice(${currentPrice}) - minPrice(${minPrice}); // potentialProfit = ${potentialProfit}`);

        console.log(`potentialProfit(${potentialProfit}) > maxProfit(${maxProfit}) ? `)

        if (potentialProfit > maxProfit){
            console.log(`да, больше`);
            console.log(`maxProfit было: ${maxProfit}; buyDay было: ${buyDay}; minDay было: ${minDay}`);
            maxProfit = potentialProfit;
            console.log(`potentialProfit присвоили к maxProfit. maxProfit стал равен: ${maxProfit}`);
            buyDay = minDay;
            console.log(`buyDay присвоили к minDay. buyDay стал равен: ${buyDay}`);
            sellDay = i;
            console.log(`sellDay: ${sellDay}`);
        } else {
            console.log(`нет, меньше`);
        }
        console.log(`--- вышли из блока IF ---`);
        

        console.log(`currentPrice(${currentPrice}) < minPrice(${minPrice}) ? `);
        if (currentPrice < minPrice){
            console.log(`да, меньше`);
            console.log(`minPrice было: ${minPrice}; currentPrice было: ${currentPrice}; minDay было: ${minDay}`);
            minPrice = currentPrice;
            console.log(`currentPrice присвоили к minPrice. minPrice стал равен: ${minPrice}`);
            minDay = i; 
            console.log(`minDay: ${minDay}`);
        } else{
            console.log(`нет, больше`);
        }
        console.log(`--- вышли из блока IF ---`);
        console.log(`--- конец итерации №${i} -----------`);
        console.log();
    }
    return (maxProfit > 0) ? `максимальная прибыль составляет ${maxProfit}. покупка в день №${buyDay} по цене ${minPrice}, продажа в день №${sellDay} по цене ${prices[sellDay]}` : "невозможно получить прибыль" // тернарный оператор 
    // если maxProfit > 0, то return maxProfit; 
    // иначе return "невозможно получить прибыль"
    
}

let createdArray = createArray(1, 5);
let calculatedMaxProfit = maxProfit(createdArray);

console.log(createdArray);
console.log(calculatedMaxProfit);