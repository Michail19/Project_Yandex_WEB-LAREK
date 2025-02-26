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


## UML-схема

