import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-8 text-center text-white">
      <p className="mb-2">Developed by {site.name}</p>
      <p className="text-gray-400">© All rights reserved.</p>
    </footer>
  );
}
