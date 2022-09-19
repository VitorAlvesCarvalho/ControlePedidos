export const dayFormatted = (day: number): string => {
  const setDay = {
    0: 'Domingo',
    1: 'Segunda-feira',
    2: 'Terça-feira',
    3: 'Quarta-feira',
    4: 'Quinta-feira',
    5: 'Sexta-feira',
    6: 'Sábado'
  };

  return setDay[day as keyof typeof setDay];
};

export const moneyViewFormatted = (value: number): string => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
};

export const currencyToNumber = (currencyString: string): number => {
  const parsedNumber = currencyString
    .replace('R$', '')
    .replace(/\./g, '')
    .replace(',', '.')
    .trim();

  return Number(parsedNumber);
};
