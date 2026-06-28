import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt px-6 py-8 text-center">
      <p className="mb-2 text-subtext">Developed by {site.name}</p>
      <p className="font-mono text-sm text-muted">© All rights reserved.</p>
    </footer>
  );
}
