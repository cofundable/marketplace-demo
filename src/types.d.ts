import type { HTMLAttributes } from "astro/types";

export interface CardProps {
  title: string;
  body: string;
  href: string;
  badges: Array<string>;
}

export interface OrgProps {
  id: string;
  name: string;
  description: string;
  causes: string[];
  tags: string[];
  isFeatured: boolean;
  sharesCount: number;
}

export interface CallToAction extends HTMLAttributes<a> {
  variant?: "primary" | "secondary" | "tertiary" | "link";
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
}
