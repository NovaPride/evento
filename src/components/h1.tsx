import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type H1Props = {
  className?: string;
  children?: ReactNode;
};

const H1 = ({ className, children }: H1Props) => {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
