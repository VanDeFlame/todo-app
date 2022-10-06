import React, { ComponentType, useState } from 'react'; 

function withStorageListener<T>(WrappedComponent: ComponentType<T>) {

  const WrappedComponentWithStorageListener = (
    wrappedProps: Omit<T, "show" | "toggleShow">
  ) => {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'Todos')
      setStorageChange(true);
    })

    return (
      <WrappedComponent
        {...(wrappedProps as T)}
        show={storageChange}
        toggleShow={setStorageChange}
      />
    );
  }

  return WrappedComponentWithStorageListener;
}

export { withStorageListener };
