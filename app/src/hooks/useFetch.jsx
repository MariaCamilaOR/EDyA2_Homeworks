import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    try {
      const api = await fetch(url);
      const data = await api.json();

      if (!api.ok) {
        throw new Error("Fetch no funcionó");
      }

      setState({
        data,
        isLoading: false,
        hasError: null,
      });
    } catch (error) {
      setState({
        data: [],
        isLoading: false,
        hasError: error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    ...state,
  };
};
