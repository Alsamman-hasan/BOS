import { useCallback, useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
  top: number;
}

export const useWindowSize = (events: "scroll" | "resize"): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    top: 0,
  });

  const handleSize = useCallback(
    () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        top: window.pageYOffset,
      }),
    [],
  );

  useEffect(() => {
    handleSize();
    window.addEventListener(events, handleSize);
    return () => window.removeEventListener(events, handleSize);
  }, [events, handleSize]);

  return windowSize;
};