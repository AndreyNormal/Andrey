// 1. Поместить все функции связанные с выводом в консоль в отедельный объект (log)
// const log = {
//   balance: balance => console.log(),
// }

// log.blanace(balance);

// 2. Поместить все функции связанные с аналитикой в отдельный объект (analitics)



// 3*. Используя Object.entries написать функцию которая будет принимать массив чисел и объект с операциями
//  и примять эти операции к массиву с помощью .map 
//  и выводить в консоль Название операции и получившийся массив 

const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

const createArray = (mapFunction = index => index) => length => 
  Array.from({ length }, (_, index) => mapFunction(index));

const createRandomArray = (min, max) => 
  createArray(() => randomInt(min, max));


const analitics = {
  getPositives: numbers => numbers.filter(n => n > 0),
  getNegatives: numbers => numbers.filter(n => n < 0),
  
  getSum: numbers => 
    numbers.reduce((sum, number) => sum + number, 0),

  getAverage: numbers => analitics.getSum(numbers) / numbers.length,

  areAllPositive: numbers => numbers.every(n => n > 0),

  getAllDivisible: (divisor, numbers) => numbers.filter(n => n % divisor === 0) 
};


const nNoun = (form1, form2, form3) => {
  return (n) => {

    let absN = Math.abs(n);

    // 123456
    let lastDigt = absN % 10;  // 6
    let secondToLastDigits = Math.trunc(absN / 10) % 10; // 12345 % 10 = 5 

    let word;
    if (secondToLastDigits === 1) {
      word = form3;
    } else {
      if (lastDigt === 1) {
        word = form1;
      } else if (2 <= lastDigt && lastDigt <= 4) {
        word = form2;
      } else {
        word = form3;
      }
    }

    return n + " " + word;
  }
}

const nApples = nNoun("яблоко", "яблока", "яблок");

const log = {
  boxState: box => {
    console.log("В ящике " + nApples(box));
  
    if (box > 0) {
      console.log("Полная коробка");
    } else if (box === 0) {
      console.log("Пустая коробка");
    } else { // box < 0
      console.log("Кредитная коробка");
    }
  },

  transaction: amount => {
  
    console.log("----------");
    if (amount >= 0) {
      console.log("Получили " + nApples(amount));
    } else {
      console.log("Потеряли " + nApples(Math.abs(amount)));
    }
  },

  result: (box, goal) => {
    
    console.log("----------");
    if (box >= goal) {
      console.log("Ура мы накопили " + nApples(box) + "!");
    } else {
      console.log("Не повезло, не фартануло. Мы накопили только " + nApples(box) + " =(");
    }
  },

  statistics: transactions => {
    let gains = analitics.getPositives(transactions);
    let loses = analitics.getNegatives(transactions);
  
    console.log("Суммарный доход: " + analitics.getSum(gains));
    console.log("Суммарный расход: " + analitics.getSum(loses));
  
    console.log("Средний доход: " + analitics.getAverage(gains));
    console.log("Средний расход: " + analitics.getAverage(loses));
  
    if (analitics.areAllPositive(transactions)) {
      console.log("Все транзакции были положительными!");
    }
  
    console.log(transactions.map(transaction => transaction >= 0 ? "Доход" : "Расход"));
  
    console.log("Круглые транзакции", analitics.getAllDivisible(5, transactions));
  },
}

// ---- 
let amounts = createRandomArray(-10, 20) (30);

let goal = 100;

let box = 0;
log.boxState(box);

let transactions = [];

while (box < goal && amounts.length > 0) {
  let amount = amounts.shift();
  box += amount;

  transactions.push(amount);

  log.transaction(amount);
  log.boxState(box);
}

log.result(box, goal);
log.statistics(transactions);


