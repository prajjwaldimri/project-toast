import React, { useEffect } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";
import useEscapeKey from "../../hooks/useEscapeKey";

function ToastShelf() {
  const { toasts, removeToast, clearToasts } = React.useContext(ToastContext);

  useEscapeKey({ escapeKeyCallback: clearToasts });

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast, index) => (
        <li className={styles.toastWrapper} key={`${toast.variant}-${index}`}>
          <Toast variant={toast.variant} onDismiss={() => removeToast(index)}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
