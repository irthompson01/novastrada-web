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
    <Card className="h-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border-2 border-[#1E4F85] dark:border-[#9aa0a6]/50">
      <CardBody className="p-8 flex flex-col h-full">
        <div className="bg-primary text-primary-foreground dark:bg-[#BDC0C6] dark:text-[#1E4F85] rounded-xl w-14 h-14 flex items-center justify-center mb-6">
          <Icon icon={icon} className="text-3xl" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
        <Button as={Link} href={href} color="primary" className="px-6 bg-primary text-primary-foreground dark:bg-[#BDC0C6] dark:text-[#1E4F85] mt-auto">
          View Project
        </Button>
      </CardBody>
    </Card>
  );
}

export default function ProjectsPage() {
  const projects = [
    {
      icon: "bi:bicycle",
      title: "Bike It! Bellagio",
      description:
        "Website migration from Weebly to modern React. Integrated with Booqable, SumUp, and SignNow to automatically update and process orders from rental contract signatures. Streamlines the bike rental workflow with automated document processing.",
      href: "#",
    },
    {
      icon: "bi:box",
      title: "Square Off",
      description:
        "A multiplayer strategy game built with Python and React. It allows users to play a card game with their friends.",
      href: "#",
    },
    {
      icon: "bi:file-earmark-spreadsheet",
      title: "Index Auto Classification Engine",
      description:
        "An ETL workflow built with AWS Step Functions to extract text, generate metadata with LLMs, classify with Semaphore, and load data into OpenSearch. Compares the effectiveness of keyword, vector, and semantic search while demonstrating how document metadata enhances content findability.",
      href: "#",
    },
    {
      icon: "bi:file-earmark-image",
      title: "Mark's Movie Database",
      description:
        "A movie database built with Python, Neo4j and React. It allows users to search for movies, view details, and add them to their watchlist.",
      href: "#",
    }
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


