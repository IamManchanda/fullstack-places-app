import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const activeHttpRequests = useRef([]);
  const sendRequest = useCallback(async function handleRequestCallback(
    url,
    method = "GET",
    body = null,
    headers = {},
  ) {
    setIsLoading(true);
    const httpAbortCtrl = new AbortController();
    activeHttpRequests.current.push(httpAbortCtrl);
    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
        signal: httpAbortCtrl.signal,
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      return responseData;
    } catch (error) {
      setError(error.message || "Something went wrong, please try again.");
    } finally {
      setIsLoading(false);
    }
  },
  []);
  const clearError = () => setError(null);

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach(({ abort }) => abort());
    };
  }, []);
  return {
    isLoading,
    error,
    sendRequest,
    clearError,
  };
};
