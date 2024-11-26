"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import Logo from "./logo";

const ROUTES = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

const Header = () => {
  const activePathname = usePathname();

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-3 sm:px-9">
      <Logo />
      <nav>
        <ul className="flex gap-x-6 text-sm">
          {ROUTES.map(({ name, path }) => (
            <li
              key={path}
              className={cn("relative transition hover:text-white", {
                "text-white": activePathname === path,
                "text-white/50": activePathname !== path,
              })}
            >
              <Link href={path} className="flex h-12 items-center">
                {name}
              </Link>
              {activePathname === path && (
                <motion.div
                  layoutId="header-active-link"
                  transition={{
                    type: "spring",
                    bounce: 0.35,
                    duration: 0.69,
                  }}
                  className="absolute bottom-0 h-1 w-full bg-accent"
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
