import EventCard from "@/components/event-card";

import { type EventoEvent } from "@prisma/client";
import { getEvents } from "@/lib/utils";

type EventsListProps = {
  city: string;
  page: number;
};

const EventsList = async ({ city, page }: EventsListProps) => {
  const events = await getEvents(city);

  return (
    <section className="flex max-w-[1100px] flex-wrap justify-center gap-10 px-20">
      {events.map((event: EventoEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
