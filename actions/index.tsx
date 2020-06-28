import useSWR from 'swr';

export const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const result = await res.json();

    if (res.status !== 200) {
      return Promise.reject(result);
    }

    return result;
  });

export const useGetUserById = () => {
  const { data, error, ...rest } = useSWR(
    'https://jsonplaceholder.typicode.com/users/1',
    fetcher
  );
  return { data, error, loading: !data && !error, ...rest };
};
