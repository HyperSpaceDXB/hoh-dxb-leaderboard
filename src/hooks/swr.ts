"use client";

import { useState, useEffect } from "react";

interface UseSwrOptions {
  refreshInterval?: number;
}

function useSwr<T>(
  key: string | null,
  fetcher: () => Promise<T>,
  options?: UseSwrOptions
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetcher(); // Assert key is not null
        setData(response);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    if (key) {
      fetchData();
      if (options?.refreshInterval) {
        const intervalId = setInterval(fetchData, options.refreshInterval);
        return () => clearInterval(intervalId);
      }
    }
  }, [key, options?.refreshInterval]);

  return { data, error, isLoading };
}

export default useSwr;
