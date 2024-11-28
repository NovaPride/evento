import clsx, { type ClassValue } from "clsx";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: { date: "asc" },
    take: 6,
  });

  if (!events) {
    console.error(`Events in city ${city} not found`);
    return notFound();
  }

  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });

  if (!event) {
    console.error(`Event with slug ${slug} not found`);
    return notFound();
  }

  return event;
}
