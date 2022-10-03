export enum TypeModal {
  ModalOrdered = 'ModalOrdered',
  ModalPayment = 'ModalPayment'
}

export enum SizeButton {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}

export interface IItemTable {
  id: string;
  identifier: string;
  valueOrdered: number;
  payments: number;
  totalRemaining: number;
  ordered: IProduct[];
}

export interface IProduct {
  id: string;
  name: string;
  value: number;
  valueAdd?: number;
}

export interface IProductList {
  id: string;
  identifier: string;
  products: IProduct[];
}

export interface IChangeProductQuantity {
  product: IProduct;
  value: number;
}

export interface IConfirmOrdered {
  productsAdd: IProduct[];
  totalValue: number;
  table: IItemTable;
}

export interface IConfirmPayment {
  paymentValue: number;
  table: IItemTable;
}

export interface IPayloadModal {
  itemTable: IItemTable;
  typeModal: string;
}
