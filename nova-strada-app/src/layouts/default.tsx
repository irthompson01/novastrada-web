import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="w-full bg-black py-4 mt-auto">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <div className="text-small text-white">
              Copyright © NovaStrada LLC 2024
            </div>
            <div className="flex items-center gap-4">
              <Link
                className="text-gray-300 text-small hover:text-white"
                href="#!"
              >
                Privacy
              </Link>
              <span className="text-white">·</span>
              <Link
                className="text-gray-300 text-small hover:text-white"
                href="#!"
              >
                Terms
              </Link>
              <span className="text-white">·</span>
              <Link
                className="text-gray-300 text-small hover:text-white"
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
