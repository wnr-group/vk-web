export const noStore = { "Cache-Control": "no-store" } as const;

export async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}
