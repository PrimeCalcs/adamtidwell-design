"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { workItems } from "@/lib/content";

export default function Work() {
  return (
    <section className="border-t border-foreground/10">
      <div className="mx-auto max-w-content px-6 py-24 md:px-8 md:py-32">
        <FadeIn>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Selected work
          </h2>
        </FadeIn>

        <ul className="mt-16 grid gap-12 md:gap-16">
          {workItems.map((item, index) => (
            <li key={item.title}>
              <FadeIn delay={index * 0.1}>
                <article className="group grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-center md:gap-12">
                  <div className="overflow-hidden rounded-sm bg-foreground/5">
                    <Image
                      src={item.imagePath}
                      alt=""
                      width={640}
                      height={400}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm uppercase tracking-widest text-muted">
                      {item.context}
                    </p>
                    <p className="text-base leading-relaxed text-muted">
                      {item.outcome}
                    </p>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
