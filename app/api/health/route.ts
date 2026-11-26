import { noStore } from "@/lib/http";

export function GET() {
  return Response.json({ status: "ok" }, { headers: noStore });
}
