'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    //проверка на корректность вводимых данных
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

    //объект
let appData = {
    budget: money,
    expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


function chooseExpanses() {
    //цикл, чтобы задать вопросы от a1 до a4
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

        if (typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
            console.log("Done");
            appData.expenses[a] = b;
        } else {
            console.log ("bad result");
            i--;
        }
        
    }
}
chooseExpanses();

function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Budget per day is " + appData.moneyPerDay + "rub.");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Minimum");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Middle");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Maximum");
    } else {
        console.log("Error");
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("How many savings?"),
            percent = +prompt("How percent?");

            appData.monthIncome = save/100/12*percent;
            alert("Plus per month is: " + appData.monthIncome);
    }
}

checkSavings();


// Функция для определения необязательных расходов
function chooseOptExpenses() {                             
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();

