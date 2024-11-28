import H1 from "@/components/h1";
import { Suspense } from "react";
import { Metadata } from "next";
import EventsList from "@/components/events-list";
import Loading from "./loading-sus";
import { capitalize } from "@/lib/utils";

type Props = {
  params: {
    city: string;
  };
};

type EventPageProps = Props & {
  searchParams: {
    page: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;
  return city === "all"
    ? { title: "All Events" }
    : { title: `Events in ${capitalize(city)}` };
}

export default async function EventsPage({
  params,
  searchParams,
}: EventPageProps) {
  const city = params.city;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-10">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} page={page} />
      </Suspense>
    </main>
  );
}
