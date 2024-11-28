"use client";

import { type EventoEvent } from "@prisma/client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);

const EventCard = ({ event }: EventCardProps) => {
  const { name, slug, location, date, organizerName, imageUrl } = event;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const convertedDate = new Date(date);

  const temp = convertedDate.getDate();
  const day = temp < 10 ? `0${temp}` : temp;

  const month = convertedDate.toLocaleString("en-US", { month: "short" });

  return (
    <MotionLink
      className="h-[380px] max-w-[500px] flex-1 basis-80"
      href={`/event/${slug}`}
      ref={ref}
      style={{
        // @ts-ignore
        scale: scaleProgress,
        // @ts-ignore
        opacity: opacityProgress,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      <section className="state-effect relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-white/[3%]">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
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
    </MotionLink>
  );
};

export default EventCard;
