import type { Statistic } from "@/types";

import { BannerMedia } from "@/components/org-details/components/banner-media";
import { BannerStats } from "@/components/org-details/components/banner-stats";
import { BannerCTAs } from "@/components/org-details/components/calls-to-action";

interface Props {
  stats?: Statistic[];
}

export function BannerGrid({ stats }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <BannerMedia />
      <div className="flex flex-col px-2 md:px-12 md:py-2">
        <div className="grow flex flex-col justify-center py-3 border-y-4 border-y-primary">
          {stats && <BannerStats stats={stats} />}
          <BannerCTAs />
        </div>
      </div>
    </div>
  );
}
