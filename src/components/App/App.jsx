import React from 'react';
import invoices from './invoices.json';
import plays from './plays.json';
import createStatementData from './createStatementData';

const App = () => {
  // //*first program
  // function statement(invoice, plays) {
  //   let totalAmount = 0;
  //   let volumeCredits = 0;
  //   let result = `Statement for ${invoice.customer}\n`;
  //   const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
  //     .format;
  //   for (let perf of invoice.performances) {
  //     const play = plays[perf.playlD];
  //     let thisAmount = 0;
  //     switch (play.type) {
  //       case 'tragedy':
  //         thisAmount = 40000;
  //         if (perf.audience > 30) {
  //           thisAmount += 1000 * (perf.audience - 30);
  //         }
  //         break;
  //       case 'comedy':
  //         thisAmount = 30000;
  //         if (perf.audience > 20) {
  //           thisAmount += 10000 + 500 * (perf.audience - 20);
  //         }
  //         thisAmount += 300 * perf.audience;
  //         break;
  //       default:
  //         throw new Error(`unknown type: ${play.type}`);
  //     }
  //     // Добавление бонусов
  //     volumeCredits += Math.max(perf.audience - 30, 0);
  //     // Дополнительный бонус за каждые 10 комедий
  //     if ('comedy' === play.type) {
  //       volumeCredits += Math.floor(perf.audience / 5);
  //     }
  //     // Вывод строки счета
  //     result += `${play.name}: ${format(thisAmount / 100)}`;
  //     result += `(${perf.audience} seats)\n`;
  //     totalAmount += thisAmount;
  //   }
  //   result += `Amount owed is ${format(totalAmount / 100)}\n`;
  //   result += `You earned ${volumeCredits} credits\n`;
  //   return result;
  // }

  // //*first refactoring
  // function amountFor(aPerfomance, play) {
  //   let result = 0;

  //   switch (play.type) {
  //     case 'tragedy':
  //       result = 40000;
  //       if (aPerfomance.audience > 30) {
  //         result += 1000 * (aPerfomance.audience - 30);
  //       }
  //       break;
  //     case 'comedy':
  //       result = 30000;
  //       if (aPerfomance.audience > 20) {
  //         result += 10000 + 500 * (aPerfomance.audience - 20);
  //       }
  //       result += 300 * aPerfomance.audience;
  //       break;
  //     default:
  //       throw new Error(`unknown type: ${play.type}`);
  //   }
  //   return result;
  // }

  // function statement2(invoice, plays) {
  //   let totalAmount = 0;
  //   let volumeCredits = 0;
  //   let result = `Statement for ${invoice.customer}\n`;
  //   const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
  //     .format;
  //   for (let perf of invoice.performances) {
  //     const play = plays[perf.playlD];
  //     let thisAmount = amountFor(perf, play);
  //     // Добавление бонусов
  //     volumeCredits += Math.max(perf.audience - 30, 0);
  //     // Дополнительный бонус за каждые 10 комедий
  //     if ('comedy' === play.type) {
  //       volumeCredits += Math.floor(perf.audience / 5);
  //     }
  //     // Вывод строки счета
  //     result += `${play.name}: ${format(thisAmount / 100)}`;
  //     result += `(${perf.audience} seats)\n`;
  //     totalAmount += thisAmount;
  //   }
  //   result += `Amount owed is ${format(totalAmount / 100)}\n`;
  //   result += `You earned ${volumeCredits} credits\n`;
  //   return result;
  // }

  // //*second refactoring

  // function amountFor(aPerfomance) {
  //   let result = 0;
  //   switch (playFor(aPerfomance).type) {
  //     case 'tragedy':
  //       result = 40000;
  //       if (aPerfomance.audience > 30) {
  //         result += 1000 * (aPerfomance.audience - 30);
  //       }
  //       break;
  //     case 'comedy':
  //       result = 30000;
  //       if (aPerfomance.audience > 20) {
  //         result += 10000 + 500 * (aPerfomance.audience - 20);
  //       }
  //       result += 300 * aPerfomance.audience;
  //       break;
  //     default:
  //       throw new Error(`unknown type: ${playFor(aPerfomance).type}`);
  //   }
  //   return result;
  // }

  // function playFor(aPerfomance) {
  //   return plays[aPerfomance.playID];
  // }

  // function statement(invoice) {
  //   let totalAmount = 0;
  //   let volumeCredits = 0;
  //   let result = `Statement for ${invoice.customer}\n`;
  //   const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
  //     .format;
  //   for (let perf of invoice.performances) {
  //     let thisAmount = amountFor(perf);
  //     // Добавление бонусов
  //     volumeCredits += Math.max(perf.audience - 30, 0);
  //     // Дополнительный бонус за каждые 10 комедий
  //     if ('comedy' === playFor(perf).type) {
  //       volumeCredits += Math.floor(perf.audience / 5);
  //     }
  //     // Вывод строки счета
  //     result += `${playFor(perf).name}: `;
  //     result += `${format(thisAmount / 100)}`;
  //     result += `(${perf.audience} seats)\n`;
  //     totalAmount += thisAmount;
  //   }
  //   result += `Amount owed is ${format(totalAmount / 100)}\n`;
  //   result += `You earned ${volumeCredits} credits\n`;
  //   return result;
  // }

  // //*third refactoring

  // function amountFor(aPerfomance) {
  //   let result = 0;
  //   switch (playFor(aPerfomance).type) {
  //     case 'tragedy':
  //       result = 40000;
  //       if (aPerfomance.audience > 30) {
  //         result += 1000 * (aPerfomance.audience - 30);
  //       }
  //       break;
  //     case 'comedy':
  //       result = 30000;
  //       if (aPerfomance.audience > 20) {
  //         result += 10000 + 500 * (aPerfomance.audience - 20);
  //       }
  //       result += 300 * aPerfomance.audience;
  //       break;
  //     default:
  //       throw new Error(`unknown type: ${playFor(aPerfomance).type}`);
  //   }
  //   return result;
  // }

  // function playFor(aPerfomance) {
  //   return plays[aPerfomance.playID];
  // }

  // function volumeCreditsFor(aPerfomance) {
  //   let result = 0;
  //   result += Math.max(aPerfomance.audience - 30, 0);
  //   if ('comedy' === playFor(aPerfomance).type) {
  //     result += Math.floor(aPerfomance.audience / 5);
  //   }
  //   return result;
  // }

  // function usd(aNumber) {
  //   return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(
  //     aNumber,
  //   );
  // }

  // function statement(invoice) {
  //   let totalAmount = 0;
  //   let volumeCredits = 0;
  //   let result = `Statement for ${invoice.customer}\n`;

  //   for (let perf of invoice.performances) {
  //     volumeCredits += volumeCreditsFor(perf);

  //     // Вывод строки счета
  //     result += `${playFor(perf).name}: `;
  //     result += `${usd(amountFor(perf) / 100)}`;
  //     result += `(${perf.audience} seats)\n`;
  //     totalAmount += amountFor(perf);
  //   }
  //   result += `Amount owed is ${usd(totalAmount / 100)}\n`;
  //   result += `You earned ${volumeCredits} credits\n`;
  //   return result;
  // }

  // //*fourth refactoring
  // function statement(invoice, plays) {
  //   let result = `Statement for ${invoice.customer}\n`;

  //   for (let perf of invoice.performances) {
  //     // Вывод строки счета
  //     result += `${playFor(perf).name}: `;
  //     result += `${usd(amountFor(perf) / 100)}`;
  //     result += `(${perf.audience} seats)\n`;
  //   }
  //   result += `Amount owed is ${usd(totalAmount(invoice) / 100)}\n`;
  //   result += `You earned ${totalvolumeCredits(invoice)} credits\n`;
  //   return result;

  //   function amountFor(aPerfomance) {
  //     let result = 0;
  //     switch (playFor(aPerfomance).type) {
  //       case 'tragedy':
  //         result = 40000;
  //         if (aPerfomance.audience > 30) {
  //           result += 1000 * (aPerfomance.audience - 30);
  //         }
  //         break;
  //       case 'comedy':
  //         result = 30000;
  //         if (aPerfomance.audience > 20) {
  //           result += 10000 + 500 * (aPerfomance.audience - 20);
  //         }
  //         result += 300 * aPerfomance.audience;
  //         break;
  //       default:
  //         throw new Error(`unknown type: ${playFor(aPerfomance).type}`);
  //     }
  //     return result;
  //   }

  //   function playFor(aPerfomance) {
  //     return plays[aPerfomance.playID];
  //   }

  //   function volumeCreditsFor(aPerfomance) {
  //     let result = 0;
  //     result += Math.max(aPerfomance.audience - 30, 0);
  //     if ('comedy' === playFor(aPerfomance).type) {
  //       result += Math.floor(aPerfomance.audience / 5);
  //     }
  //     return result;
  //   }

  //   function totalvolumeCredits() {
  //     let result = 0;
  //     for (let perf of invoice.performances) {
  //       result += volumeCreditsFor(perf);
  //     }
  //     return result;
  //   }

  //   function usd(aNumber) {
  //     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(
  //       aNumber,
  //     );
  //   }

  //   function totalAmount() {
  //     let result = 0;
  //     for (let perf of invoice.performances) {
  //       result += amountFor(perf);
  //     }
  //     return result;
  //   }
  // }

  // //*fourth refactoring
  // function statement(invoice, plays) {
  //   const statementData = {};
  //   statementData.customer = invoice.customer;
  //   statementData.performances = invoice.performances.map(enrichPerfomance);
  //   statementData.totalAmount = totalAmount(statementData);
  //   statementData.totalvolumeCredits = totalvolumeCredits(statementData);
  //   return renderPlainText(statementData);

  //   function enrichPerfomance(aPerfomance) {
  //     const result = Object.assign({}, aPerfomance);
  //     result.play = playFor(result);
  //     result.amount = amountFor(result);
  //     result.volumeCredits = volumeCreditsFor(result);
  //     return result;
  //   }

  //   function playFor(aPerfomance) {
  //     return plays[aPerfomance.playID];
  //   }

  //   function amountFor(aPerfomance) {
  //     let result = 0;
  //     switch (aPerfomance.play.type) {
  //       case 'tragedy':
  //         result = 40000;
  //         if (aPerfomance.audience > 30) {
  //           result += 1000 * (aPerfomance.audience - 30);
  //         }
  //         break;
  //       case 'comedy':
  //         result = 30000;
  //         if (aPerfomance.audience > 20) {
  //           result += 10000 + 500 * (aPerfomance.audience - 20);
  //         }
  //         result += 300 * aPerfomance.audience;
  //         break;
  //       default:
  //         throw new Error(`unknown type: ${aPerfomance.play.type}`);
  //     }
  //     return result;
  //   }

  //   function volumeCreditsFor(aPerfomance) {
  //     let result = 0;
  //     result += Math.max(aPerfomance.audience - 30, 0);
  //     if ('comedy' === aPerfomance.play.type) {
  //       result += Math.floor(aPerfomance.audience / 5);
  //     }
  //     return result;
  //   }

  //   function totalvolumeCredits(data) {
  //     let result = 0;
  //     for (let perf of data.performances) {
  //       result += perf.volumeCredits;
  //     }
  //     return result;
  //   }

  //   function totalAmount(data) {
  //     let result = 0;
  //     for (let perf of data.performances) {
  //       result += perf.amount;
  //     }
  //     return result;
  //   }
  // }

  // function renderPlainText(data) {
  //   let result = `Statement for ${data.customer}\n`;

  //   for (let perf of data.performances) {
  //     // Вывод строки счета
  //     result += `${perf.play.name}: `;
  //     result += `${usd(perf.amount / 100)}`;
  //     result += `(${perf.audience} seats)\n`;
  //   }
  //   result += `Amount owned is ${usd(data.totalAmount / 100)}\n`;
  //   result += `You earned ${data.totalvolumeCredits} credits\n`;
  //   return result;

  //   function usd(aNumber) {
  //     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(
  //       aNumber,
  //     );
  //   }
  // }

  // //*fifth refactoring
  // function statement(invoice, plays) {
  //   return renderPlainText(createStatementData(invoice, plays));

  //   function renderPlainText(data) {
  //     let result = `Statement for ${data.customer}\n`;

  //     for (let perf of data.performances) {
  //       // Вывод строки счета
  //       result += `${perf.play.name}: `;
  //       result += `${usd(perf.amount / 100)}`;
  //       result += `(${perf.audience} seats)\n`;
  //     }
  //     result += `Amount owned is ${usd(data.totalAmount / 100)}\n`;
  //     result += `You earned ${data.totalvolumeCredits} credits\n`;
  //     return result;

  //     function usd(aNumber) {
  //       return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(
  //         aNumber,
  //       );
  //     }
  //   }
  // }

  //*six refactoring

  function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
  }

  function renderPlainText(data) {
    let result = `Statement for ${data.customer}\n`;

    for (let perf of data.performances) {
      // Вывод строки счета
      result += `${perf.play.name}: `;
      result += `${usd(perf.amount / 100)}`;
      result += `(${perf.audience} seats)\n`;
    }
    result += `Amount owned is ${usd(data.totalAmount / 100)}\n`;
    result += `You earned ${data.totalvolumeCredits} credits\n`;
    return result;
  }

  function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
  }

  function renderHtml(data) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += '<table>\n';
    result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>';
    for (let perf of data.performances) {
      result += ` <tr><td>${perf.play.name}</td>`;
      result += `<td>${perf.audience}</td>`;
      result += `<td>${usd(perf.amount)}</td></tr>\n`;
    }
    result += '</table>\n';
    result += `<p>Amount owned is `;
    result += `<em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>You earned <em>${data.totalvolumeCredits}`;
    result += `</em> credits</p>\n`;
    return result;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(
      aNumber,
    );
  }

  return <div dangerouslySetInnerHTML={{ __html: htmlStatement(invoices, plays) }} />;
};

export default App;
