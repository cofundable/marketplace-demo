import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import BadgeList from "@/components/BadgeList";
import type { OrgProps } from "@/types";

export default function OrgCardItem(org: OrgProps) {
  return (
    <Card className="min-w-72 flex flex-col overflow-hidden">
      <CardHeader className="py-4 min-h-24 bg-slate-200">
        <CardTitle className="text-xl tracking-normal">{org.name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4 pt-2 grow">
        <p className="text-primary/70">{org.description}</p>
      </CardContent>
      <CardFooter>
        <BadgeList badges={org.tags} />
      </CardFooter>
    </Card>
  );
}
