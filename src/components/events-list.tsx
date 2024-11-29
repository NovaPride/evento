import EventCard from "@/components/event-card";
import { type EventoEvent } from "@prisma/client";
import { getEvents } from "@/lib/server-utils";
import { EVENTS_PER_PAGE } from "@/lib/constants";
import PaginationControls from "@/components/pagination-controls";

type EventsListProps = {
  city: string;
  page?: number;
};

const EventsList = async ({ city, page = 1 }: EventsListProps) => {
  const { events, totalCount } = await getEvents(city, page);

  const path = {
    prev: page > 1 ? `/events/${city}?page=${page - 1}` : undefined,
    next:
      totalCount > EVENTS_PER_PAGE * page
        ? `/events/${city}?page=${page + 1}`
        : undefined,
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <section className="flex max-w-[1100px] flex-wrap justify-center gap-10 px-20">
        {events.map((event: EventoEvent) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
      <PaginationControls path={path} />
    </div>
  );
};

export default EventsList;
