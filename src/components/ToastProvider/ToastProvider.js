import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(
    (variant, message) => {
      setToasts((toasts) => [...toasts, { variant, message }]);
    },
    [setToasts]
  );

  const removeToast = React.useCallback(
    (index) => {
      setToasts((toasts) => toasts.filter((_, i) => i !== index));
    },
    [setToasts]
  );

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  });

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, clearToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
