import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import BadgeList from "@/components/BadgeList";
import type { CardProps } from "@/types";

const interactiveLinkClasses = `
  hover:shadow-md hover:-translate-y-1
  focus:shadow-md focus:-translate-y-1
  `;

export default function CardItem({ href, title, body, badges }: CardProps) {
  return (
    <a href={href}>
      <Card className={interactiveLinkClasses}>
        <CardHeader className="pt-4 pb-2 tracking-normal">
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-lg text-primary/70">{body}</p>
        </CardContent>
        <CardFooter>
          <BadgeList badges={badges} />
        </CardFooter>
      </Card>
    </a>
  );
}
