import axios, { AxiosError, isAxiosError } from "axios";
import { useEffect, useState } from "react";

interface ValidationError {
  message: null | string;
  errors: null | Record<string, string[]>;
}

interface ApiResponse {
  isLoading: boolean;
  apiData: any;
  serverError: AxiosError<ValidationError, Record<string, unknown>> | null;
}

const useFetch = (url: string): ApiResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState<null | AxiosError<
    ValidationError,
    Record<string, unknown>
  >>(null);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const resp = await axios.get(url);
        const data = await resp?.data;

        setApiData(data);
      } catch (error: unknown) {
        if (isAxiosError<ValidationError, Record<string, unknown>>(error)) {
          setServerError(error);
        } else {
          console.error(error);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { isLoading, apiData, serverError };
};

export default useFetch;
