import { useCallback, useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();

  const fetchData = useCallback((url: string) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError("Error!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setError(null);
    fetchData(url);
  }, [url, fetchData]);

  return {
    loading,
    error,
    data,
    fetchData,
  };
};

export default useFetch;
