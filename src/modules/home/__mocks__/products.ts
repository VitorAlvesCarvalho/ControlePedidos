import { IProductList } from './../types/types';
export const MockProducts: IProductList[] = [
  {
    id: '1',
    identifier: 'Bebidas',
    products: [
      {
        id: '1',
        name: 'Cerveja Preta',
        value: 10.99
      },
      {
        id: '2',
        name: 'Refrigerante',
        value: 8.0
      },
      {
        id: '3',
        name: 'Suco',
        value: 7.5
      }
    ]
  },
  {
    id: '2',
    identifier: 'Lanches',
    products: [
      {
        id: '4',
        name: 'Sanduiche',
        value: 19.99
      },
      {
        id: '5',
        name: 'Cachorro Quente',
        value: 8.0
      },
      {
        id: '6',
        name: 'Pastel',
        value: 7.0
      }
    ]
  },
  {
    id: '3',
    identifier: 'Porções',
    products: [
      {
        id: '7',
        name: 'Carne',
        value: 35.3
      },
      {
        id: '8',
        name: 'Frango',
        value: 30.2
      }
    ]
  }
];
