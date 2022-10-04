import { dayFormatted, moneyViewFormatted, currencyToNumber } from './helpers';

const dayCases = [
  ['Domingo', 0],
  ['Segunda-feira', 1],
  ['Terça-feira', 2],
  ['Quarta-feira', 3],
  ['Quinta-feira', 4],
  ['Sexta-feira', 5],
  ['Sábado', 6]
];

describe('Helpers', () => {
  it.each(dayCases)(
    'should render text %p when function recept %p',
    (day, index) => {
      expect(dayFormatted(Number(index))).toBe(day);
    }
  );

  it('should add currency formatting', () => {
    expect(moneyViewFormatted(1.5).replace(/\s/g, '')).toBe('R$1,50');
  });

  it('should remove currency formatting', () => {
    expect(currencyToNumber('R$ 1,50')).toBe(1.5);
  });
});
