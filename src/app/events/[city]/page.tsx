import H1 from "@/components/h1";
import { Suspense } from "react";
import { Metadata } from "next";
import EventsList from "@/components/events-list";
import Loading from "./loading-sus";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type MetadataProps = {
  params: {
    city: string;
  };
};

type EventPageProps = MetadataProps & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: MetadataProps): Metadata {
  const city = params.city;
  return city === "all"
    ? { title: "All Events" }
    : { title: `Events in ${capitalize(city)}` };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) throw new Error("Invalid page number");
  const page = parsedPage.data;

  return (
    <main className="flex min-h-[110vh] flex-col items-center px-[20px] py-24">
      <H1 className="mb-10">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={page} />
      </Suspense>
    </main>
  );
}
