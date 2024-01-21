import type { HTMLAttributes } from "astro/types";

export interface CardProps {
  title: string;
  body: string;
  href: string;
  badges: Array<string>;
}

export interface Statistic {
  value: string;
  description: string;
}

export interface OrgProps {
  id: string;
  name: string;
  description: string;
  causes: string[];
  tags: string[];
  isFeatured: boolean;
  sharesCount: number;
  stats?: Statistic[];
}

export interface CallToAction extends HTMLAttributes<a> {
  variant?: "primary" | "secondary" | "tertiary" | "link";
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
}

export interface NavLink {
  label: string;
  href: string;
  description: string;
}
