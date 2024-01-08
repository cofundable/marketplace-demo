export interface CardProps {
  title: string;
  body: string;
  href: string;
  badges: Array<string>;
}

export interface OrgProps {
  name: string;
  description: string;
  causes: string[];
  tags: string[];
  isFeatured: boolean;
  sharesCount: number;
}
