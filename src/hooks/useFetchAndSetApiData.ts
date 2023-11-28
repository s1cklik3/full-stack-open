import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios, { AxiosError, isAxiosError } from "axios";

interface ValidationError {
  message: null | string;
  errors: null | Record<string, string[]>;
}

const useFetchAndSetApiData = (
  url: string,
  setApiData: Dispatch<SetStateAction<any>>,
) => {
  const [isLoading, setIsLoading] = useState(false);
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

  return { isLoading, serverError };
};

export default useFetchAndSetApiData;
