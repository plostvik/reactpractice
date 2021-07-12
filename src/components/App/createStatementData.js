export default function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerfomance);
  result.totalAmount = totalAmount(result);
  result.totalvolumeCredits = totalVolumeCredits(result);
  return result;

  function enrichPerfomance(aPerfomance) {
    const calculator = new PerfomanceCalculator(aPerfomance, playFor(aPerfomance));
    const result = Object.assign({}, aPerfomance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function playFor(aPerfomance) {
    return plays[aPerfomance.playID];
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
}

class PerfomanceCalculator {
  constructor(aPerfomance, aPlay) {
    this.perfomance = aPerfomance;
    this.play = aPlay;
  }

  get amount() {
    let result = 0;
    switch (this.play.type) {
      case 'tragedy':
        result = 40000;
        if (this.perfomance.audience > 30) {
          result += 1000 * (this.perfomance.audience - 30);
        }
        break;
      case 'comedy':
        result = 30000;
        if (this.perfomance.audience > 20) {
          result += 10000 + 500 * (this.perfomance.audience - 20);
        }
        result += 300 * this.perfomance.audience;
        break;
      default:
        throw new Error(`unknown type: ${this.play.type}`);
    }
    return result;
  }

  get volumeCredits() {
    let result = 0;
    result += Math.max(this.perfomance.audience - 30, 0);
    if ('comedy' === this.play.type) {
      result += Math.floor(this.perfomance.audience / 5);
    }
    return result;
  }
}
