import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/content";

export default function WhatIDo() {
  return (
    <section className="border-t border-foreground/10">
      <div className="mx-auto max-w-content px-6 py-24 md:px-8 md:py-32">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            What I do
          </h2>
        </FadeIn>

        <ul className="mt-16 grid gap-16 md:grid-cols-3 md:gap-12">
          {services.map((service, index) => (
            <li key={service.title}>
              <FadeIn delay={index * 0.1}>
                <h3 className="font-display text-xl font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
