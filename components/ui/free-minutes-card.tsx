// components/free-minutes-card.tsx
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface FreeMinutesCardProps {
  minutes: number;
  days: number;
  className?: string;
  variant?: "default" | "compact" | "urgent";
}

export function FreeMinutesCard({
  minutes = 100,
  days = 14,
  className,
  variant = "default",
}: FreeMinutesCardProps) {
  const isUrgent = days <= 3;

  return (
    <div className="flex gap-5">
      <div className="px-4 py-1 border rounded-3xl flex items-center w-fit">
        Free Minutes Remaining: {minutes}
      </div>
      <div className="bg-black text-white px-4 py-1 border rounded-3xl flex items-center w-fit">
        {days} Days left
      </div>
    </div>
  );
}
