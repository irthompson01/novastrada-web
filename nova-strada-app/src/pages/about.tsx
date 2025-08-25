import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import DefaultLayout from "@/layouts/default";

export default function AboutPage() {
  return (
    <DefaultLayout>
      {/* Header */}
      <header className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Delivering innovative development solutions with expertise and passion.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              NovaStrada LLC was founded to provide high-quality development and data services.
            </p>
            <Button
              as={Link}
              href="/services"
              color="primary"
              size="lg"
              className="px-8"
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/assets/mission.png" 
                alt="NovaStrada Development" 
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Expertise & Technology</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a strong foundation in data science, computer science, and business analytics, 
                we bring both technical depth and business acumen to every project. Our expertise 
                spans full-stack development, cloud architecture, data analytics, and custom integrations.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="/assets/expertise.png" 
                alt="Technology Stack" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet the Founder</h2>
            <p className="text-xl text-gray-600">Dedicated to quality and your success</p>
          </div>
          <div className="flex justify-center">
            <div className="text-center max-w-sm">
              <img 
                src="/assets/headshot.JPG" 
                alt="Ian Thompson" 
                className="rounded-full w-48 h-48 object-cover mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-2">Ian Thompson</h3>
              <p className="text-gray-600 italic mb-3">Founder & Lead Developer</p>
              <p className="text-gray-600 text-sm">
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
