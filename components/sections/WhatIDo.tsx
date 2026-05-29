import Eyebrow from "@/components/ui/Eyebrow";
import { services, whatIDo } from "@/lib/content";
import { tokens, preventWidows } from "@/lib/typography";

export default function WhatIDo() {
  return (
    <div className="max-w-prose">
      <Eyebrow as="h2" className="mb-5 mt-16">
        What I do
      </Eyebrow>

      <p className={`mb-8 ${tokens.body}`}>{preventWidows(whatIDo.subhead)}</p>

      <div>
        {services.map((service, index) => (
          <div
            key={service.title}
            className="grid grid-cols-[24px_100px_1fr] items-baseline gap-4 border-b border-line py-4"
          >
            <span className={tokens.serviceNum}>0{index + 1}</span>
            <span className={tokens.serviceName}>{service.title}</span>
            <span className={tokens.serviceBody}>
              {preventWidows(service.description)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
