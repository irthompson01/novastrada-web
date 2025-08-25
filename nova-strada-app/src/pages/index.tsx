import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const services = [
    {
      icon: "bi:code-slash",
      title: "Full Stack Development",
      description: "Python, React, and modern web technologies to build scalable applications from front-end to back-end."
    },
    {
      icon: "bi:cloud",
      title: "Cloud Services", 
      description: "Cloud architecture, deployment, and optimization using AWS, Azure, and Google Cloud services for scalable and reliable solutions."
    },
    {
      icon: "bi:diagram-3",
      title: "API Development",
      description: "RESTful APIs, integrations, and microservices to connect your systems and streamline workflows."
    },
    {
      icon: "bi:bar-chart",
      title: "Data Science & Analytics",
      description: "Data science, ETL workflows, and business intelligence solutions to unlock insights from your data."
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <header className="bg-secondary py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 leading-tight">
                Full Stack Development & Data Services
              </h1>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                Delivering tailored digital solutions that seamlessly integrate front-end experiences, 
                back-end logic, and cloud-native infrastructure. With a strong foundation in Python, 
                API architecture, and scalable data systems, we transform complex requirements into 
                robust, high-performing applications. Let's collaborate to turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  as={Link}
                  href="#services"
                  color="primary"
                  size="lg"
                  className="px-8"
                >
                  Our Services
                </Button>
                <Button
                  as={Link}
                  href="/contact"
                  variant="bordered"
                  size="lg"
                  className="px-8 border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <img 
                src="/assets/homepage_pic.png" 
                alt="Development Services" 
                className="rounded-lg max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Expert Development Services
              </h2>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-shadow">
                    <CardBody className="p-6">
                      <div className="bg-primary text-primary-foreground rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                        <Icon icon={service.icon} className="text-2xl" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-foreground/70">{service.description}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
