/**
 * A helper function to fetch data from your API.
 */
export async function fetchFromAPI(endpoint: string, opts: object) {
  const { method, body } = { method: 'POST', body: null, ...opts };

  const res = await fetch(`/api/${endpoint}`, {
    method,
    ... (body ? { body: JSON.stringify(body) } : {}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}
