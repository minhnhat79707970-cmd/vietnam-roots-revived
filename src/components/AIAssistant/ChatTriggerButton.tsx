import { MessageCircle, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

export function ChatTriggerButton({ isOpen, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Đóng trợ lý AI" : "Mở trợ lý AI Hồn Việt"}
      aria-expanded={isOpen}
      className={`group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center
                  rounded-full border transition-all duration-300 active:scale-95
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
                  ${isOpen
                    ? "bg-patina-deep border-gold/40 text-gold-light shadow-soft"
                    : "bg-patina border-gold/50 text-gold-light shadow-bronze hover:scale-110"}`}
    >
      {!isOpen && (
        <>
          <span className="absolute inset-0 rounded-full bg-gold/20 animate-ripple" />
          <span className="absolute inset-[-4px] rounded-full border border-gold/30" />
        </>
      )}
      <span
        className="absolute right-full mr-3 hidden whitespace-nowrap rounded-md border border-gold/30
                   bg-patina-deep px-2.5 py-1 text-[11px] uppercase tracking-widest text-gold-light
                   opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:inline-block"
      >
        Trợ lý Di sản
      </span>
      {isOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
    </button>
  );
}