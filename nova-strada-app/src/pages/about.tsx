import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      {/* Header */}
      <header className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Icon icon="bi:building" className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Delivering innovative development solutions with expertise and passion.
            </h1>
            <p className="text-xl text-white/80 mb-8">
              NovaStrada LLC was founded to provide high-quality development and data services.
            </p>
            <Button
              as={Link}
              href="/services"
              color="primary"
              size="lg"
              className="px-8 bg-primary text-primary-foreground dark:bg-[#BDC0C6] dark:text-[#1E4F85]"
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="bg-primary text-primary-foreground dark:bg-[#BDC0C6] dark:text-[#1E4F85] rounded-lg w-24 h-24 flex items-center justify-center">
                <Icon icon="streamline:target" className="text-4xl" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                NovaStrada LLC was created to bridge the gap between complex technical challenges 
                and practical business solutions. We focus on delivering scalable, efficient, and 
                innovative development services that help businesses grow and succeed in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Expertise & Technology</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                With a strong foundation in data science, computer science, and business analytics, 
                we bring both technical depth and business acumen to every project. Our expertise 
                spans full-stack development, cloud architecture, data analytics, and custom integrations.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="bg-primary text-primary-foreground dark:bg-[#BDC0C6] dark:text-[#1E4F85] rounded-lg w-24 h-24 flex items-center justify-center">
                <Icon icon="bi:cpu" className="text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Meet the Founder</h2>
            <p className="text-xl text-foreground/70">Dedicated to quality and your success</p>
          </div>
          <div className="flex justify-center">
            <div className="text-center max-w-sm">
              <img 
                src="/assets/headshot.JPG" 
                alt="Ian Thompson" 
                className="rounded-3xl w-56 h-72 object-cover object-top mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-2 text-foreground">Ian Thompson</h3>
              <p className="text-foreground/70 italic mb-3">Founder & Lead Developer</p>
              <p className="text-foreground/60 text-sm">
                BS in Data Science / Computer Science<br />
                MS in Business Analytics
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
