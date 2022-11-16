import { useEffect, useReducer } from "react";

const initialState = <T, S>(initialValue: T): S => ({
  error: '' as any,
  item: initialValue,
  loading: true,
  sincronized: true,
} as S);

enum actionTypes {
  ERROR        = 'ERROR',
  LOAD         = 'LOAD',
  SAVE         = 'SAVE',
  SUCCESS      = 'SUCCESS',
  UNSINCRONIZE = 'UNSINCRONIZE',
}

const useLocalStorage = <T>(itemName: string, initialValue: T) => {
  interface State {
    error: any;
    item: T;
    loading: boolean;
    sincronized: boolean;
  }

  const [state, dispatch] = useReducer(reducer<State>, initialState<T, State>(initialValue))

  // ACTION CREATORS
  const onError = (error: any) => dispatch({
    type: actionTypes.ERROR,
    payload: { error }
  });
  const onLoading = (time?: number) => {
    dispatch({
      type: actionTypes.LOAD,
      payload: { loading: true }
    });
    setTimeout(() => {
      dispatch({
        type: actionTypes.LOAD,
        payload: { loading: false }
      });
    }, (time || 500));
  }
  const onSave = (item: T) => dispatch({
    type: actionTypes.SAVE,
    payload: { item }
  });
  const onSuccess = (item: T) => dispatch({
    type: actionTypes.SUCCESS,
    payload: { item }
  });
  const onUnsincronize = () => dispatch({type: actionTypes.UNSINCRONIZE});

  // get item from localStorage
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        // if 'itemName' doesn't exists in localStorage, create it with 'initialValue'
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (err) {
        onError(err)
      }
    }, 1000);
  }, [state.sincronized])

  // update Item in localStorage
  const saveItem = (newItem: T) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (err) {
      onError(err)
    }
  };

  return {
    state,
    onLoading,
    onUnsincronize,
    saveItem,
  };
}

const reducer = <S>(state: S, {type, payload}: {type: actionTypes, payload?: any}): S => {
  switch(type) {
    case actionTypes.ERROR: return {
      ...state,
      error: payload.error,
    }
    case actionTypes.LOAD: return {
      ...state,
      loading: payload.loading,
    }
    case actionTypes.SAVE: return {
      ...state,
      item: payload.item
    }
    case actionTypes.SUCCESS: return {
      ...state,
      error: false,
      item: payload.item,
      loading: false,
      sincronized: true,
    }
    case actionTypes.UNSINCRONIZE: return {
      ...state,
      loading: true,
      sincronized: false,
    }
    default: return {...state}
  }
}

export { useLocalStorage }