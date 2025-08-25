import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  return (
    <DefaultLayout>
      {/* Header Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <Card className="bg-gray-50">
            <CardBody className="p-12">
              <div className="text-center mb-12">
                <div className="bg-primary text-white rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon icon="bi:envelope" className="text-3xl" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in touch</h1>
                <p className="text-xl text-gray-600">We'd love to hear from you</p>
              </div>
              
              <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Email us directly</h3>
                  <p className="text-gray-600 mb-8">
                    Send us an email with your inquiry. Please include your name and phone number 
                    in your message so we can get back to you quickly.
                  </p>
                  <div className="space-y-4">
                    <Button
                      as={Link}
                      href="mailto:info@novastrada.tech"
                      color="primary"
                      size="lg"
                      className="w-full sm:w-auto px-8"
                      startContent={<Icon icon="bi:envelope-fill" />}
                    >
                      info@novastrada.tech
                    </Button>
                    <div className="text-sm text-gray-600 flex items-center justify-center gap-2">
                      <Icon icon="bi:info-circle" />
                      <span>Please include your name and phone number in your email</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
