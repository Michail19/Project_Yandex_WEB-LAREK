import { IProductItem } from "../../types";
import { IEvents } from "../base/events";

export interface IDataModel {
  productCards: IProductItem[];
  selectedСard: IProductItem;
  setPreview(item: IProductItem): void;
}

export class DataModel implements IDataModel {
  protected pProductCards: IProductItem[];
  selectedСard: IProductItem;

  constructor(protected events: IEvents) {
    this.pProductCards = []
  }

  set productCards(data: IProductItem[]) {
    this.pProductCards = data;
    this.events.emit('productCards:receive');
  }

  get productCards() {
    return this.pProductCards;
  }

  setPreview(item: IProductItem) {
    this.selectedСard = item;
    this.events.emit('modalCard:open', item)
  }
}
