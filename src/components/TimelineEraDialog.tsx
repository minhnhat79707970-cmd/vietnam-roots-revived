import { useMemo } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useAutoTranslate } from "@/hooks/useAutoTranslate";
import type { TimelineEvent } from "@/data/timelineEvents";

type Props = {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  eraName: string;
  period: string;
  events: TimelineEvent[];
};

export const TimelineEraDialog = ({ open, onOpenChange, eraName, period, events }: Props) => {
  const texts = useMemo(() => events.flatMap((e) => [e.year, e.title, e.story]), [events]);
  const tr = useAutoTranslate(texts);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[88vh] overflow-y-auto">
        <DialogHeader>
          <div className="text-xs uppercase tracking-[0.15em] text-vermilion">{period}</div>
          <DialogTitle className="font-display text-4xl text-patina-deep">{eraName}</DialogTitle>
          <DialogDescription className="sr-only">{eraName}</DialogDescription>
        </DialogHeader>
        <ol className="relative border-l border-patina/30 ml-2 space-y-10 mt-4">
          {events.map((e, i) => (
            <li key={e.title} className="pl-6 relative">
              <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-vermilion border-2 border-background" />
              <div className="text-xs uppercase tracking-[0.12em] text-vermilion mb-1">{tr[i * 3] ?? e.year}</div>
              <h4 className="font-display text-2xl text-patina-deep mb-3">{tr[i * 3 + 1] ?? e.title}</h4>
              <div className="group overflow-hidden rounded-lg mb-3 aspect-[16/9]">
                <img
                  src={e.image}
                  alt={tr[i * 3 + 1] ?? e.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="text-foreground/80 leading-relaxed font-serif-vn">{tr[i * 3 + 2] ?? e.story}</p>
            </li>
          ))}
        </ol>
      </DialogContent>
    </Dialog>
  );
};
