// Товар в магазине
export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number | null;
}

// Действия с элементами интерфейса
export interface Actions {
  onClick: (event: MouseEvent) => void;
}

// Интерфейс для данных формы заказа
export interface OrderForm {
payment?: string;
address?: string;
phone?: string;
email?: string;
total?: string | number;
}

// Список товаров в заказе
export interface Order extends OrderForm {
  items: string[];
}

// Описание заказа в конкретном лоте
export interface OrderLot{
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
}

// Результат оформления заказа
export interface OrderResult {
  id: string;
  total: number;
}

// Ошибки формы
export type FormErrors = Partial<Record<keyof IOrder, string>>;
