import { Skeleton } from "@/components/ui/skeleton";

export function TimelineSkeleton() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <Skeleton className="h-8 w-64 mx-auto mb-3" />
      <Skeleton className="h-4 w-96 max-w-full mx-auto mb-12" />
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-6 mb-10">
          <Skeleton className="flex-shrink-0 w-20 h-20 rounded-full" />
          <div className="flex-1 pt-4 space-y-3">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      ))}
    </section>
  );
}

export function HeritageGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <Skeleton className="h-8 w-72 mx-auto mb-3" />
      <Skeleton className="h-4 w-96 max-w-full mx-auto mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="rounded-md overflow-hidden border border-border">
            <Skeleton className="h-48 w-full rounded-none" />
            <div className="p-4 space-y-3">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function RegionsSkeleton() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <Skeleton className="h-8 w-64 mx-auto mb-3" />
      <Skeleton className="h-4 w-80 max-w-full mx-auto mb-12" />
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-56 w-full" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
          </div>
        ))}
      </div>
    </section>
  );
}

export function FestivalsSkeleton() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <Skeleton className="h-8 w-56 mx-auto mb-3" />
      <Skeleton className="h-4 w-72 max-w-full mx-auto mb-12" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-64 w-full" />
        ))}
      </div>
    </section>
  );
}