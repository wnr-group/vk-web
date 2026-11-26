import Link from "next/link";
import { Container } from "@/components/ui/primitives";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/admin", label: "Admin" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-plate">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-brand">
          VK
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-6 text-sm font-medium text-ink-soft">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
