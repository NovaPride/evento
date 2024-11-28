import { cn } from "@/lib/utils";
import Skeleton from "./skeleton";

type SkeletonCardProps = {
  className?: string;
};

const SkeletonCard = ({ className }: SkeletonCardProps) => {
  return (
    <div className={className}>
      <Skeleton className="h-12 w-12 rounded-full" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
};

export default SkeletonCard;
