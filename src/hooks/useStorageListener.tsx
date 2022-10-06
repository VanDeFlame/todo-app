import { useState } from 'react'; 

const useStorageListener = (sincronize: Function) => {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener('storage', (change) => {
    if (change.key === 'Todos')
      setStorageChange(true);
  })

  const toggleShow = () => {
    setStorageChange(false);
    sincronize(false);
  }

  return {
    show: storageChange,
    toggleShow: toggleShow
  };
}

export { useStorageListener };
