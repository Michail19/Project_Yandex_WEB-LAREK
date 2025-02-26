// Товар в магазине
export interface IProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number | null;
}

// Действия с элементами интерфейса
export interface IActions {
  onClick: (event: MouseEvent) => void;
}

// Интерфейс для данных формы заказа
export interface IOrderForm {
payment?: string;
address?: string;
phone?: string;
email?: string;
total?: string | number;
}

// Список товаров в заказе
export interface IOrder extends IOrderForm {
  items: string[];
}

// Описание заказа в конкретном лоте
export interface IOrderLot{
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
}

// Результат оформления заказа
export interface IOrderResult {
  id: string;
  total: number;
}

// Ошибки формы
export type IFormErrors = Partial<Record<keyof IOrder, string>>;
