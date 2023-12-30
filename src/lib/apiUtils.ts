export async function getBody(req: any) {
  try {
    return await req.json();
  } catch {
    return await req.body;
  }
}
