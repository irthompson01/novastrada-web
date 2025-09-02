import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Icon } from "@iconify/react";

import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  return (
    <DefaultLayout>
      {/* Header */}
      <header className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Icon icon="bi:envelope" className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Get in touch</h1>
            <p className="text-xl text-white/80 mb-8">We'd love to hear from you</p>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Email us directly</h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Send us an email with your inquiry. Please include your name and phone number 
              in your message so we can get back to you quickly.
            </p>
            <div className="space-y-6">
              <Button
                as={Link}
                href="mailto:info@novastrada.tech"
                color="primary"
                size="lg"
                className="px-8 bg-primary text-primary-foreground dark:bg-[#BDC0C6] dark:text-[#1E4F85]"
                startContent={<Icon icon="bi:envelope-fill" />}
              >
                info@novastrada.tech
              </Button>
              <div className="text-sm text-foreground/60 flex items-center justify-center gap-2">
                <Icon icon="bi:info-circle" />
                <span>Please include your name and phone number in your email</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
