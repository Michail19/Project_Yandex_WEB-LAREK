// Типы для работы с API
export interface ApiResponse<T> {
  data: T;
  status: string;
  error?: string;
}

// Пример объекта, приходящего через API для товара
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  inStock: boolean;
}

// Пример объекта для корзины
export interface CartItem {
  productId: string;
  quantity: number;
}

// Пример объекта для пользователя
export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

// Типы для работы с UI-объектами
export interface UIElement {
  id: string;
  type: string;
  classNames?: string[];
  attributes?: Record<string, string>;
}

// Пример данных, выводимых на экран (например, список товаров)
export interface ProductList {
  products: Product[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}

// Пример объекта для модального окна
export interface ModalData {
  title: string;
  content: string;
  isOpen: boolean;
}

// Общий тип для данных, получаемых с API
export type ApiData = Product | CartItem | User; // можно добавлять другие типы данных, приходящие с API

// Обобщенные типы для компонентов
export interface ComponentProps<T> {
  data: T;
  onClick: () => void;
}

// Пример функции для преобразования данных
export function transformApiResponse<T>(response: ApiResponse<T>): T {
  if (response.status === 'success') {
    return response.data;
  } else {
    throw new Error(response.error || 'Unknown error');
  }
}
