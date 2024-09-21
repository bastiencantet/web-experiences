import {SkeletonCard} from "@/components/card-skeleton";


export function LoadingCards() {
  return (
      <div className="flex flex-col gap-10 w-full justify-center items-center mb-10  transition duration-300 ease-in-out px-4">
            <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
      </div>

  );
}
