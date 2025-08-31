import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function ServicesPage() {
  const services = [
    {
      icon: "bi:code-slash",
      title: "Full Stack Development",
      description: "End-to-end web application development using modern technologies:",
      features: [
        "Python & FastAPI/Flask backends",
        "React & modern JavaScript frontends", 
        "Database design & optimization",
        "Responsive web design"
      ]
    },
    {
      icon: "bi:database",
      title: "Data Engineering & Management",
      description: "Reliable, scalable data platforms and governance:",
      features: [
        "Modern ETL/ELT pipelines (Airflow, Dagster)",
        "Data warehousing (Snowflake, BigQuery, Redshift)",
        "Modeling with dbt and data quality",
        "Governance, cataloging, lineage"
      ]
    },
    {
      icon: "bi:graph-up",
      title: "Graph Data Applications",
      description: "Leverage graph databases for connected insights:",
      features: [
        "Neo4j/GraphQL APIs",
        "Entity resolution and relationship mapping",
        "Recommendation and path analysis",
        "Knowledge graphs & visualization"
      ]
    },
    {
      icon: "bi:cloud",
      title: "Cloud Services",
      description: "Scalable cloud solutions and infrastructure management:",
      features: [
        "Cloud architecture design",
        "Containerized applications for scalability",
        "CI/CD pipeline setup",
        "Cost optimization strategies"
      ]
    },
    {
      icon: "bi:diagram-3",
      title: "API Development & Integration",
      description: "Connect your systems with robust API solutions:",
      features: [
        "RESTful API development",
        "Third-party integrations",
        "Microservices architecture",
        "API documentation & testing"
      ]
    },
    {
      icon: "bi:bar-chart",
      title: "Data Science & Analytics",
      description: "Transform your data into actionable insights:",
      features: [
        "ETL workflow development",
        "Business intelligence dashboards",
        "Machine learning solutions",
        "Data visualization & reporting"
      ]
    }
  ];

  const processSteps = [
    {
      icon: "bi:chat-dots",
      title: "1. Consultation",
      description: "Understanding your requirements and goals"
    },
    {
      icon: "bi:pencil-square",
      title: "2. Planning", 
      description: "Detailed project planning and architecture design"
    },
    {
      icon: "bi:gear",
      title: "3. Development",
      description: "Agile development with regular updates"
    },
    {
      icon: "bi:rocket-takeoff",
      title: "4. Deployment",
      description: "Testing, deployment, and ongoing support"
    }
  ];

  return (
    <DefaultLayout>
      {/* Header */}
      <header className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Professional Development Services
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              From concept to deployment, we provide comprehensive development and data solutions 
              tailored to your business needs.
            </p>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-shadow">
                <CardBody className="p-8">
                  <div className="bg-primary text-primary-foreground rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Icon icon={service.icon} className="text-2xl" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h2>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon icon="bi:check" className="text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-content2">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Development Process</h2>
            <p className="text-xl text-foreground/70">A structured approach to deliver quality solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon icon={step.icon} className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs / Details Accordion */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Service Details</h2>
            <p className="text-foreground/70">A few common questions about how I work</p>
          </div>
          <Accordion variant="splitted">
            <AccordionItem key="1" aria-label="Engagement model" title="What does a typical engagement look like?">
              I start with a discovery session, move into a short planning phase, then iterate in agile sprints with weekly demos.
            </AccordionItem>
            <AccordionItem key="2" aria-label="Deliverables" title="What do I receive at the end?">
              Production-ready code, documentation, infrastructure as code (if applicable), and a knowledge handoff session.
            </AccordionItem>
            <AccordionItem key="3" aria-label="Collaboration" title="How do we collaborate?">
              I use GitHub, linear/jira, Slack/Teams, and shared docs. I can embed with your team or operate independently.
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Ready to get started?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Let's discuss how we can help bring your project to life.
            </p>
            <Button
              as={Link}
              href="/contact"
              color="primary"
              size="lg"
              className="px-8"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
