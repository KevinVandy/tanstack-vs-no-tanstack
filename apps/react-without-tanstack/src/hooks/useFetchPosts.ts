import { useCallback, useEffect, useState } from "react";
import { IPost } from "../types/api-types";

export const useFetchPosts = () => {
  const [data, setData] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchUrl = new URL(`https://jsonplaceholder.typicode.com/posts`);
      const response = await fetch(fetchUrl.href);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate slow network
      const fetchedPosts = (await response.json()) as IPost[];
      setData(fetchedPosts);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, isLoading, isError, refetch };
};
