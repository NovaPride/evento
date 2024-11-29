import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  path: {
    prev?: string;
    next?: string;
  };
};

const btnStyles =
  "absolute flex items-center gap-2 bg-white/5 px-5 py-3 text-white rounded-md opacity-75 hover:opacity-100 transition";

const PaginationControls = ({ path }: Props) => {
  const { prev, next } = path;
  return (
    <section className="relative flex w-full min-w-[1100px] justify-between gap-2">
      {prev && (
        <Link href={prev} className={cn(btnStyles, "left-0")}>
          <ArrowLeftIcon />
          Previous
        </Link>
      )}
      {next && (
        <Link href={next} className={cn(btnStyles, "right-0")}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
