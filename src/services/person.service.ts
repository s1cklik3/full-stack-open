import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import axios, { isAxiosError } from "axios";

export interface ValidationError {
  message: null | string;
  errors: null | Record<string, string[]>;
}

export interface ApiResponse {
  loading: boolean;
  data: any;
  error: AxiosError<ValidationError, Record<string, unknown>> | null;
}

const baseUrl = "http://localhost:3001/persons";

const useFetchPersons = (): ApiResponse => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | AxiosError<
    ValidationError,
    Record<string, unknown>
  >>(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const resp = await axios.get(baseUrl);
        const data = await resp?.data;

        setData(data);
      } catch (error: unknown) {
        if (isAxiosError<ValidationError, Record<string, unknown>>(error)) {
          setError(error);
        } else {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, data, error };
};

export { useFetchPersons };
