// state

import { Action } from 'rxjs/internal/scheduler/Action';
import { createStore } from 'redux';
import { ProductModel } from '../models/product.model';

export class ProductsState {
  public products: ProductModel[] = [];
}

// Action type

export enum ProductsActionType {
  FetchProducts,
  AddProduct,
  UpdateProduct,
  DeleteProduct,
}

// Action

export interface ProductsAction {
  type: ProductsActionType;
  payload: any;
}

// Reducer

export function productsReducer(
  currentState = new ProductsState(),
  action: ProductsAction
): ProductsState {
  const newState = { ...currentState };

  switch (action.type) {
    case ProductsActionType.FetchProducts:
      newState.products = action.payload;
      break;
    case ProductsActionType.AddProduct:
      newState.products.push(action.payload);
      break;
    case ProductsActionType.UpdateProduct:
      const indexToUpdate = newState.products.findIndex(
        (p) => p.id === action.payload.id
      );
      if (indexToUpdate >= 0) {
        newState.products[indexToUpdate] = action.payload;
      }
      break;
    case ProductsActionType.DeleteProduct:
      const indexToDelete = newState.products.findIndex(
        (p) => p.id === action.payload
      );
      if (indexToDelete >= 0) {
        newState.products.splice(indexToDelete, 1);
      }

      break;
  }

  return newState;
}

// Store
export const productsStore = createStore(productsReducer);
