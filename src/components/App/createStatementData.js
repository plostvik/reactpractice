export default function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerfomance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalvolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerfomance(aPerfomance) {
    const result = Object.assign({}, aPerfomance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function playFor(aPerfomance) {
    return plays[aPerfomance.playID];
  }

  function amountFor(aPerfomance) {
    let result = 0;
    switch (aPerfomance.play.type) {
      case 'tragedy':
        result = 40000;
        if (aPerfomance.audience > 30) {
          result += 1000 * (aPerfomance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (aPerfomance.audience > 20) {
          result += 10000 + 500 * (aPerfomance.audience - 20);
        }
        result += 300 * aPerfomance.audience;
        break;
      default:
        throw new Error(`unknown type: ${aPerfomance.play.type}`);
    }
    return result;
  }

  function volumeCreditsFor(aPerfomance) {
    let result = 0;
    result += Math.max(aPerfomance.audience - 30, 0);
    if ('comedy' === aPerfomance.play.type) {
      result += Math.floor(aPerfomance.audience / 5);
    }
    return result;
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
}
