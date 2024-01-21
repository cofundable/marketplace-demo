import type { Statistic } from "@/types";

interface Props {
  stats: Statistic[];
}

export function BannerStats({ stats }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 text-center py-6">
      {stats.map((stat) => (
        <div className="flex flex-col justify-center pb-4">
          <div className="text-3xl font-semibold text-foreground py-2">
            {stat.value}
          </div>
          <div className="text-muted-foreground">{stat.description}</div>
        </div>
      ))}
    </div>
  );
}
