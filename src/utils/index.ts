/**
 * Function for generic http request used for useSWR
 * @param { String } url - URL of request
 */
export function genericFetcher({
    url,
    httpMethod = 'GET',
    nextConfig = {
        revalidate: 1_800, // 30 minutes
    },
}: {
    url: string;
    httpMethod: 'GET' | 'POST' | 'PUT' | 'PATCH'; // EXCLUDE DELETE AND OPTION
    nextConfig?: NextFetchRequestConfig;
}) {
    return fetch(`${url}`, {
        method: httpMethod,
        next: nextConfig,
    }).then((response) => response.json());
}

/**
 * For Mocking HTTP requests only
 */
export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
