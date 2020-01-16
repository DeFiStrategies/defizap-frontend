const stats = 'https://defizap-api.herokuapp.com/zaps';

export default async function ZapStats() {
  const res = await fetch(stats);
  const jsonResponse = await res.json();
  return jsonResponse;
}
