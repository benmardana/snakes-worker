const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

interface Scores {
  [k: string]: number;
}

const serialise = (scores: Scores) => JSON.stringify(scores);
const deserialise = (scores?: string | null): Scores =>
  scores
    ? Object.fromEntries(
        Object.entries<string>(JSON.parse(scores)).map(([k, v]) => [
          k.toUpperCase(),
          parseInt(v),
        ])
      )
    : {};

const fetchScores: () => Promise<Record<string, number>> = async () =>
  deserialise(await SNAKES.get('highScores'));

const getHandler = async () =>
  new Response(serialise(await fetchScores()), { headers });

const postHandler = async (request: Request) => {
  const formData = Object.fromEntries(await request.formData());

  if (!formData || !('name' in formData && 'score' in formData)) {
    return new Response(undefined, { status: 400 });
  }

  const scores = await fetchScores();

  if (
    formData.name.toUpperCase() in scores &&
    formData.score < scores[formData.name.toUpperCase()]
  ) {
    return getHandler();
  }

  await SNAKES.put(
    'highScores',
    serialise({ ...scores, [formData.name.toUpperCase()]: formData.score })
  );

  return getHandler();
};

addEventListener('fetch', (event) => {
  switch (event.request.method) {
    case 'HEAD':
      // headers only
      return event.respondWith(new Response(undefined, { headers }));
    case 'GET':
      return event.respondWith(getHandler());
    case 'POST':
      return event.respondWith(postHandler(event.request));
    default:
      return event.respondWith(
        new Response(undefined, { headers, status: 501 })
      );
  }
});
