import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "w-[550px]animate-pulse h-4 rounded-md bg-white/5",
        className,
      )}
    />
  );
};

export default Skeleton;
