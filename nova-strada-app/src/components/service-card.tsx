import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react";

export function ServiceCard({
  icon,
  title,
  description,
  features,
}: {
  icon: string;
  title: string;
  description: string;
  features?: string[];
}) {
  return (
    <Card className="h-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 border-2 border-[#1E4F85] dark:border-[#9aa0a6]/50">
      <CardBody className="p-8">
        <div className="bg-primary text-primary-foreground rounded-xl w-14 h-14 flex items-center justify-center mb-6">
          <Icon icon={icon} className="text-3xl" />
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-foreground/70 mb-5">{description}</p>
        {features && (
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <Icon icon="bi:check" className="text-[#1E4F85] dark:text-[#9aa0a6]" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </Card>
  );
}


