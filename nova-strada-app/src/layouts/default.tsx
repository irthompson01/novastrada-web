import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="w-full bg-[#14263D] text-white py-4 mt-auto">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <div className="text-small">
              Copyright © NovaStrada LLC 2025
            </div>
            <div className="flex items-center gap-4">
              <Link
                className="text-current/70 text-small hover:text-current transition-colors"
                href="#!"
              >
                Privacy
              </Link>
              <span className="text-current">·</span>
              <Link
                className="text-current/70 text-small hover:text-current transition-colors"
                href="#!"
              >
                Terms
              </Link>
              <span className="text-current">·</span>
              <Link
                className="text-current/70 text-small hover:text-current transition-colors"
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
