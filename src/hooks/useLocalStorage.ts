import { useEffect, useState } from "react";

const useLocalStorage = <T>(itemName: string, initialValue: T) => {
  const [sincronizedItem, setSincronizedItem] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [item, setItem] = useState(initialValue);

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

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error)
      }
    }, 1000)
  }, [sincronizedItem])

  // update Item in localStorage
  const saveItem = (newItem: any) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  // 
  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem
  };
}

export { useLocalStorage }