import { type EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};

const EventCard = ({ event }: EventCardProps) => {
  const { name, slug, location, date, organizerName, imageUrl } = event;

  const convertedDate = new Date(date);

  const temp = convertedDate.getDate();
  const day = temp < 10 ? `0${temp}` : temp;

  const month = convertedDate.toLocaleString("en-US", { month: "short" });

  return (
    <Link
      className="h-[380px] max-w-[500px] flex-1 basis-80"
      href={`/event/${slug}`}
    >
      <section className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-white/[3%] state-effect">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={280}
          className="object-cover h-[60%]"
        />
        <div className="flex flex-1 flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="italic text-white/75">{organizerName}</p>
          <p className="mt-4 text-sm italic text-white/50">{location}</p>
        </div>
        <section className="absolute left-[12px] top-[12px] flex h-[45px] w-[45px] flex-col items-center justify-center rounded-md bg-black/30">
          <p className="-mb-[5px] text-xl font-bold">{day}</p>
          <p className="text-xs uppercase text-accent">{month}</p>
        </section>
      </section>
    </Link>
  );
};

export default EventCard;
