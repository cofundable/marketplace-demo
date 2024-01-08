import OrgCardItem from "@/components/OrgCardItem";
import type { OrgProps } from "@/types";

interface OrgCardListProps {
  heading: string;
  orgs: OrgProps[];
}

export default function OrgCardList({ heading, orgs }: OrgCardListProps) {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <ul role="list" className="flex flex-1 overflow-x-scroll space-x-5 py-4">
        {orgs.map((org) => (
          <OrgCardItem key={org.name} {...org} />
        ))}
      </ul>
    </div>
  );
}
