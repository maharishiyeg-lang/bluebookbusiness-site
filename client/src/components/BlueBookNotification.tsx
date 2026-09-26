/**
 * BlueBookNotification — Modern Slate design
 * Warm-gold book mark, concise advisor-style copy, and accessible feedback.
 */
import { CircleAlert, CircleCheck, Info, X } from "lucide-react";
import { toast } from "sonner";

export type BlueBookNotificationKind = "success" | "error" | "info";

interface BlueBookNotificationProps {
  id: string | number;
  kind: BlueBookNotificationKind;
  title: string;
  description: string;
}

const notificationStyles = {
  success: { icon: CircleCheck, label: "Message received", accent: "oklch(0.78 0.12 85)" },
  error: { icon: CircleAlert, label: "A quick check", accent: "oklch(0.72 0.17 28)" },
  info: { icon: Info, label: "Blue Book update", accent: "oklch(0.78 0.12 85)" },
} as const;

export function BlueBookNotification({ id, kind, title, description }: BlueBookNotificationProps) {
  const style = notificationStyles[kind];
  const Icon = style.icon;
  return (
    <div className="relative w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-lg p-4 shadow-2xl" role={kind === "error" ? "alert" : "status"} aria-live={kind === "error" ? "assertive" : "polite"} style={{ background: "oklch(0.22 0.018 250)", border: `1px solid ${style.accent}55`, boxShadow: "0 18px 45px oklch(0.10 0.018 250 / 0.42)" }}>
      <div className="absolute inset-y-0 left-0 w-1" style={{ background: style.accent }} />
      <div className="flex gap-3 pl-2">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-sm" style={{ background: `${style.accent}20` }}><Icon size={18} style={{ color: style.accent }} aria-hidden="true" /></div>
        <div className="min-w-0 flex-1 pr-5">
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: style.accent, fontFamily: "var(--font-body)" }}>{style.label}</div>
          <h3 className="text-sm font-bold leading-tight" style={{ color: "oklch(0.97 0.005 80)", fontFamily: "var(--font-display)" }}>{title}</h3>
          <p className="mt-1 text-xs leading-relaxed" style={{ color: "oklch(0.68 0.01 250)", fontFamily: "var(--font-body)" }}>{description}</p>
        </div>
        <button type="button" onClick={() => toast.dismiss(id)} className="absolute right-3 top-3 rounded-sm p-1 transition-colors duration-150" style={{ color: "oklch(0.60 0.01 250)" }} onMouseEnter={(event) => { event.currentTarget.style.color = "oklch(0.97 0.005 80)"; }} onMouseLeave={(event) => { event.currentTarget.style.color = "oklch(0.60 0.01 250)"; }} aria-label="Dismiss notification"><X size={15} aria-hidden="true" /></button>
      </div>
    </div>
  );
}

export function notifyBlueBook(kind: BlueBookNotificationKind, title: string, description: string) {
  return toast.custom((id) => <BlueBookNotification id={id} kind={kind} title={title} description={description} />, { duration: kind === "error" ? 6000 : 5000 });
}
