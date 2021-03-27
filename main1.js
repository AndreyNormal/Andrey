// Используя наработки предыдущих ДЗ:

// + Использовать пройденный функции массивов: map, reduce, filter, some, every, sort, reverse
// + Избавляемся от циклов, там где можем.


// 1. Разделить на положительные и отрицательные (filter)
// 2. Вывести сумму дохода (т.е. всех положительных транзакций) (reduce)
// 3. Вывести сумму расходов (т.е. всех отрицательных транзакций) (reduce)
// 4. Посчитать средний доход (т.е. среднее значение всех положительных транзакций)
// 5. Посчитать средний расход (т.е. среднее значение всех отрицательных транзакций)

// 6. Вывести специальное сообщение, если все транзакции были положительные (every)
// 7. Сгенерировать массив строк "Доход" или "Расход", соответсвенно каждой транзакции (map transaction => "Доход" или "Расход")  
// 8. Творческое задание: использовать одну из оставшихся функций

const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

const createArray = (mapFunction = index => index) => length => 
  Array.from({ length }, (_, index) => mapFunction(index));

const createRandomArray = (min, max) => 
  createArray(() => randomInt(min, max));

const getSum = numbers => 
  numbers.reduce((sum, number) => sum + number, 0);

const getAverage = numbers => getSum(numbers) / numbers.length;

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

const logBoxState = box => {
  console.log("В ящике " + nApples(box));

  if (box > 0) {
    console.log("Полная коробка");
  } else if (box === 0) {
    console.log("Пустая коробка");
  } else { // box < 0
    console.log("Кредитная коробка");
  }
}

const logTransaction = amount => {
  
  console.log("----------");
  if (amount >= 0) {
    console.log("Получили " + nApples(amount));
  } else {
    console.log("Потеряли " + nApples(Math.abs(amount)));
  }
}

const logResult = (box, goal) => {
    
  console.log("----------");
  if (box >= goal) {
    console.log("Ура мы накопили " + nApples(box) + "!");
  } else {
    console.log("Не повезло, не фартануло. Мы накопили только " + nApples(box) + " =(");
  }
}

const logStatistics = transactions => {
  let gains = transactions.filter(transaction => transaction > 0);
  let loses = transactions.filter(transaction => transaction < 0);

  console.log("Суммарный доход: " + getSum(gains));
  console.log("Суммарный расход: " + getSum(loses));

  console.log("Средний доход: " + getAverage(gains));
  console.log("Средний расход: " + getAverage(loses));

  if (transactions.every(transaction => transaction > 0)) {
    console.log("Все транзакции были положительными!");
  }

  console.log(transactions.map(transaction => transaction >= 0 ? "Доход" : "Расход"));

  console.log("Круглые транзакции", transactions.filter(transaction => transaction % 5 === 0));

}

// ---- 
let amounts = createRandomArray(-10, 20) (30);

let goal = 100;

let box = 0;
logBoxState(box);

let transactions = [];

while (box < goal && amounts.length > 0) {
  let amount = amounts.shift();
  box += amount;

  transactions.push(amount);

  logTransaction(amount);
  logBoxState(box);
}

logResult(box, goal);
logStatistics(transactions);


