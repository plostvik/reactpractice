import React from 'react';
import invoices from './invoices.json';
import plays from './plays.json';

const App = () => {
  //first program
  function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
      .format;
    for (let perf of invoice.performances) {
      const play = plays[perf.playlD];
      let thisAmount = 0;
      switch (play.type) {
        case 'tragedy':
          thisAmount = 40000;
          if (perf.audience > 30) {
            thisAmount += 1000 * (perf.audience - 30);
          }
          break;
        case 'comedy':
          thisAmount = 30000;
          if (perf.audience > 20) {
            thisAmount += 10000 + 500 * (perf.audience - 20);
          }
          thisAmount += 300 * perf.audience;
          break;
        default:
          throw new Error(`unknown type: ${play.type}`);
      }
      // Добавление бонусов
      volumeCredits += Math.max(perf.audience - 30, 0);
      // Дополнительный бонус за каждые 10 комедий
      if ('comedy' === play.type) {
        volumeCredits += Math.floor(perf.audience / 5);
      }
      // Вывод строки счета
      result += `${play.name}: ${format(thisAmount / 100)}`;
      result += `(${perf.audience} seats)\n`;
      totalAmount += thisAmount;
    }
    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
  }
  //first refactoring
  function amountFor(perf, play) {
    let thisAmount = 0;

    switch (play.type) {
      case 'tragedy':
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case 'comedy':
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`unknown type: ${play.type}`);
    }
    return thisAmount;
  }

  function statement2(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
      .format;
    for (let perf of invoice.performances) {
      const play = plays[perf.playlD];
      let thisAmount = amountFor(perf, play);
      // Добавление бонусов
      volumeCredits += Math.max(perf.audience - 30, 0);
      // Дополнительный бонус за каждые 10 комедий
      if ('comedy' === play.type) {
        volumeCredits += Math.floor(perf.audience / 5);
      }
      // Вывод строки счета
      result += `${play.name}: ${format(thisAmount / 100)}`;
      result += `(${perf.audience} seats)\n`;
      totalAmount += thisAmount;
    }
    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
  }

  console.log(statement2(invoices, plays));

  return <> hello</>;
};

export default App;
