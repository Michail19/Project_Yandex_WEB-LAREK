import { IProductItem } from '../../types';

export interface IBasketModel {
  basketProducts: IProductItem[];
  getCounter: () => number;
  getSumAllProducts: () => number;
  setSelectedСard(data: IProductItem): void;
  deleteCardToBasket(item: IProductItem): void;
  clearBasketProducts(): void
}

export class BasketModel {
  protected pBasketProducts: IProductItem[]; // список карточек товара в корзине

  constructor() {
    this.pBasketProducts = [];
  }

  set basketProducts(data: IProductItem[]) {
    this.pBasketProducts = data;
  }

  get basketProducts() {
    return this.pBasketProducts;
  }

  // количество товара в корзине
  getCounter() {
    return this.basketProducts.length;
  }

  // сумма всех товаров в корзине
  getSumAllProducts() {
    let sumAll = 0;
    this.basketProducts.forEach(item => {
      sumAll = sumAll + item.price;
    });
    return sumAll;
  }

  // добавить карточку товара в корзину
  setSelectedСard(data: IProductItem) {
    this.pBasketProducts.push(data);
  }

  // удалить карточку товара из корзины
  deleteCardToBasket(item: IProductItem) {
    const index = this.pBasketProducts.indexOf(item);
    if (index >= 0) {
      this.pBasketProducts.splice(index, 1);
    }
  }

  clearBasketProducts() {
    this.basketProducts = [];
  }
}
