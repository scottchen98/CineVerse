import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === key.toLowerCase()) action();
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === key.toLowerCase()) action();
      });
    };
  }, [key, action]);
}
