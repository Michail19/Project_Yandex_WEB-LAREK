# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами


## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```


## Описание базовых классов

### Класс `Api`.

Методы:
- `constructor(baseUrl: string, options: RequestInit = {})` - конструктор класса.
- `handleResponse(response: Response): Promise<object>` - обработчик ответа сервера.
- `get(uri: string)` - принимает изменяющеюся часть url-адреса, возвращает ответ от сервера.
- `post(uri: string, data: object, method: ApiPostMethods = 'POST')` - принимает изменяющеюся часть url-адреса, принимает данные в виде объекта для отправки на сервер, type ApiPostMethods = 'POST' | 'PUT' | 'DELETE'.

### Класс `EventEmitter`, implements `IEvents`.

Методы:
- `constructor()` - конструктор класса.
- `on<T extends object>(eventName: EventName, callback: (event: T) => void) ` - для подписки на событие.
- `off(eventName: EventName, callback: Subscriber)` - для отписки от события.
- `emit<T extends object>(eventName: string, data?: T)` - уведомления подписчиков о наступлении события соответственно.
- `onAll(callback: (event: EmitterEvent) => void)` - для подписки на все события.
- `offAll()` - сброса всех подписчиков.
- `trigger<T extends object>(eventName: string, context?: Partial<T>)` - генерирует заданное событие с заданными аргументами. Это позволяет передавать его в качестве обработчика события в другие классы. Эти классы будут генерировать события, не будучи при этом напрямую зависимыми от класса `EventEmitter`.


## Описание классов model, которые позволяют хранить и обрабатывать данные с сервера и от пользователей.

### Класс `ApiModel` наследуется от класса `Api`, передаёт и получает данные от сервера.

Методы:
- `getListProductCard` - получаем массив объектов(карточек) с сервера.
- `postOrderLot` - получаем ответ от сервера по сделанному/отправленному заказу.

### Класс `BasketModel` хранит и работает с данными полученными от пользователя.

Методы:
- `getCounter` - возвращает количество товаров в корзине.
- `getSumAllProducts` - считает и возвращает сумму синапсов всех товаров в корзине.
- `setSelectedСard` - добавляет товар в корзину.
- `deleteCardToBasket` - удаляет товар из корзины.
- `clearBasketProducts` - очищает/удаляет все товары из корзины.

### Класс `DataModel` принимает и хранит данные продуктов полученные с сервера.

Метод:
- `setPreview` - получает данные карточки которую открыл пользователь.

### Класс `FormModel` хранит данные полученные от пользователя.

Методы:
- `setOrderAddress` - принимаем/сохраняет адрес пользователя.
- `validateOrder` - проверяет адрес пользователя / и способ оплаты.
- `setOrderData` - принимаем/сохраняет номер телефона/почту пользователя.
- `validateContacts` - проверяет номер телефона/почту пользователя.
- `getOrderLot` - возвращает объект данных пользователя с выбранными товарами.

## Классы view позволяют отображать элементы страницы с полученными данными, позволяют взаимодействовать с пользователем.

### Класс `Basket` управляет отображением корзины.

Методы:
- `renderHeaderBasketCounter` - сохраняет и устанавливает какое количество товаров находится в корзине.
- `renderSumAllProducts` - сохраняет и устанавливает сумму синапсов всех товаров в корзине.

### Класс `BasketItem` управляет отображением элементов(продуктов) в корзине.

метод:
- `setPrice` - принимает цену продукта в числовом значении и возвращает в строчном.

### Класс `Card` управляет отображением карточки товара на веб странице.

Методы:
- `setText` - принимает два значения, первое HTMLElement, второе значение задаёт текстовое содержимое HTMLElement.
- `cardCategory` - принимает строчное значение и создаёт новый className для HTMLElement.
- `setPrice` - принимает цену продукта в числовом значении и возвращает в строчном.

### Класс `CardPreview` наследуется от класса `Card` и управляет отображением подробного описания карточки товара в превью, позволяет добавить карточку в корзину.

Метод:
- `notSale` - принимает данные о продукте, проверяет наличие цены продукта, при отсутствии цены ограничивает покупку.

### Класс `Order` управляет отображением содержимого модального окна и позволяет принять от пользователя метод оплаты и адрес.

Метод:
- `paymentSelection` - устанавливаем обводку вокруг выбранного метода оплаты.

### Класс `Contacts` управляет отображением содержимого модального окна и позволяет принять от пользователя номер телефона и Email.

### Класс `Modal` управляет отображением модальных окон.

Методы:
- open - отображает модальное окон.
- close - закрывает модальное окно.
  

## Взаимодействие компонентов

Компоненты взаимодействуют через API-запросы `(api.ts)`, систему событий `(events.ts)` и брокер сообщений.


## Используемые паттерны проектирования

* Observer — класс `EventEmitter` управляет подписчиками и уведомляет их при возникновении события.
* Factory Method — функция `createElement` создает DOM-элемент заданного типа, устанавливает свойства и добавляет вложенные элементы.
* Strategy - функция `getElementData` получает dataset-атрибуты элемента и использует переданную схему для приведения данных к нужным типам.
* Adapter - функции `ensureElement` и `ensureAllElements` принимают разные типы данных и приводят их к единому виду — массиву элементов.
* Facade - функции `setElementData` и `getElementData` скрывают работу с dataset-атрибутами, предоставляя удобный интерфейс для установки и получения данных.
* Mediator - класс `EventEmitter` снижает связанность между различными частями приложения.
* Decorator - функция `trigger` создает обертку вокруг события, позволяя передавать его в другие классы и добавлять контекстные данные.
* Template Method - метод `handleResponse` определяет общий алгоритм обработки ответа от сервера.

Основная архитектурная структура: **MVP**  
- **Model** – `Api` и модели данных (`UserModel`, `ProductModel`).
- **Presenter** – логика взаимодействия (`EventEmitter`).
- **View** – UI-компоненты (`ProductList`, `Cart`).


## UML-схема

![photo_5332376037889272126_y](https://github.com/user-attachments/assets/4bd249d5-e724-46b3-807e-e845140b5793)
