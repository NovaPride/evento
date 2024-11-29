import "server-only";

import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { EVENTS_PER_PAGE } from "@/lib/constants";
import prisma from "@/lib/db";
import { capitalize } from "@/lib/utils";

export const getEvents = unstable_cache(
  async (city: string, page: number = 1) => {
    const events = await prisma.eventoEvent.findMany({
      where: { city: city === "all" ? undefined : capitalize(city) },
      orderBy: { date: "asc" },
      take: EVENTS_PER_PAGE,
      skip: (page - 1) * EVENTS_PER_PAGE,
    });

    if (!events) {
      console.error(`Events in city ${city} not found`);
      return notFound();
    }

    let totalCount = 0;
    if (city === "all") {
      totalCount = await prisma.eventoEvent.count();
    } else {
      totalCount = await prisma.eventoEvent.count({
        where: { city: capitalize(city) },
      });
    }

    return { events, totalCount };
  },
);

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  if (!event) {
    console.error(`Event with slug ${slug} not found`);
    return notFound();
  }

  return event;
});
