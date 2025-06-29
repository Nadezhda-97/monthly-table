import type { ApiResponse } from "../types/api";

const url = 'https://3snet.co/js_test/api.json';

const fetchData = async (): Promise<ApiResponse> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }

  return response.json();
};

export default fetchData;