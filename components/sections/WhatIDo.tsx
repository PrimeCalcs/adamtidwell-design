import FadeIn from "@/components/ui/FadeIn";
import Eyebrow from "@/components/ui/Eyebrow";
import { services } from "@/lib/content";
import { preventWidows, tokens } from "@/lib/typography";

export default function WhatIDo() {
  return (
    <section className="mx-auto mt-24 max-w-content px-6 md:mt-32 md:px-8">
      <FadeIn>
        <Eyebrow as="h2">What I do</Eyebrow>
      </FadeIn>

      <ul className="mt-8 divide-y divide-line border-y border-line">
        {services.map((service, index) => (
          <li key={service.title}>
            <FadeIn delay={index * 0.08}>
              <div className="grid grid-cols-1 gap-2 py-8 md:grid-cols-12 md:items-baseline md:gap-8">
                <p className="font-mono text-xs text-faint md:col-span-1">
                  0{index + 1}
                </p>
                <h3 className={`md:col-span-3 ${tokens.subhead}`}>
                  {service.title}
                </h3>
                <p className={`text-muted md:col-span-8 ${tokens.body}`}>
                  {preventWidows(service.description)}
                </p>
              </div>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}
