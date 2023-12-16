import React, { useEffect } from "react";

function useEscapeKey({ escapeKeyCallback }) {
  useEffect(() => {
    // Clear all toasts when escape key is pressed
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        escapeKeyCallback && escapeKeyCallback();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  });
}

export default useEscapeKey;
