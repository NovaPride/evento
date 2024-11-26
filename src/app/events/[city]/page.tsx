import { H1 } from "@/components";
import EventsList from "@/components/events-list";
import Image from "next/image";
import { type EventoEvent } from "@/lib/types";

type EventsPageProps = {
  params: {
    city: string;
  };
};

const firstLetterToUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default async function EventsPage({ params }: EventsPageProps) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-10">
        {city === "all"
          ? "All Events"
          : `Events in ${firstLetterToUpperCase(city)}`}
      </H1>
      <EventsList events={events} />
    </main>
  );
}
