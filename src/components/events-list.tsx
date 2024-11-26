import EventCard from "@/components/event-card";

import { type EventoEvent } from "@/lib/types";

type EventsListProps = {
  events: EventoEvent[];
};

const EventsList = ({ events }: EventsListProps) => {
  return (
    <section className="flex max-w-[1100px] flex-wrap justify-center gap-10 px-20">
      {events.map((event: EventoEvent) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
