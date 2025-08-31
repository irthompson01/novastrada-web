import { ReactNode } from "react";

export function Section({
  children,
  className,
  contained = true,
}: {
  children: ReactNode;
  className?: string;
  contained?: boolean;
}) {
  return (
    <section className={className}>
      <div className={contained ? "container mx-auto max-w-7xl px-6" : undefined}>
        {children}
      </div>
    </section>
  );
}


