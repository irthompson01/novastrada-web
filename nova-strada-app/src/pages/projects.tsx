import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import DefaultLayout from "@/layouts/default";

function ProjectCard({
  icon,
  title,
  description,
  href,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
      <CardBody className="p-8">
        <div className="bg-primary text-primary-foreground rounded-xl w-14 h-14 flex items-center justify-center mb-6">
          <Icon icon={icon} className="text-3xl" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-foreground/70 mb-6">{description}</p>
        <Button as={Link} href={href} color="primary" className="px-6">
          View Project
        </Button>
      </CardBody>
    </Card>
  );
}

export default function ProjectsPage() {
  const projects = [
    {
      icon: "bi:boxes",
      title: "Inventory Insights",
      description:
        "A dashboard that unifies operational data streams and surfaces real-time KPIs.",
      href: "#",
    },
    {
      icon: "bi:graph-up-arrow",
      title: "Relationship Explorer",
      description:
        "Graph-powered app to visualize relationships and derive connected insights.",
      href: "#",
    },
  ];

  return (
    <DefaultLayout>
      <header className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Selected Projects</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            A glimpse into recent builds and concept apps that showcase full-stack capabilities.
          </p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}


