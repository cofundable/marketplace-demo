import { faker } from "@faker-js/faker";

import type { OrgProps } from "@/types";

/**
 * Optional parameters to set explicitly when generating a fake org
 * @field isFeatured  Optionally set the value of isFeatured explicitly
 * @field cause       Optionally add a specific cause to list of causes
 * @field tag         Optionally add a specific tag to list of tags
 */
interface OrgParams {
  isFeatured?: boolean;
  cause?: string;
  tag?: string;
}

interface FetchOrgParams extends OrgParams {
  limit: number;
}

/**
 * Create
 * @param OrgParams A set of
 * @returns         OrgProps
 */
function createFakeOrg({ isFeatured, tag, cause }: OrgParams): OrgProps {
  const tags = tag
    ? ["Black-owned", "Queer-owned", tag]
    : ["Black-owned", "Woman-owned"];
  const causes = cause
    ? ["Environment", "Workforce development", cause]
    : ["Education", "Children"];
  return {
    id: faker.string.uuid(),
    name: faker.company.name(),
    description: faker.lorem.words({ min: 10, max: 15 }),
    causes: causes,
    tags: tags,
    isFeatured: isFeatured || Math.random() > 0.5, // randomly return boolean value
    sharesCount: Math.random() * 100,
  };
}

/**
 * Generate a set of fake organizations to mock the results of fetchOrgs()
 * @param FetchOrgParams  Destructured FetchOrgParams
 * @returns Array of OrgProps representing a set of organizations
 */
export function mockFetchOrgs({
  limit,
  isFeatured,
  tag,
  cause,
}: FetchOrgParams): OrgProps[] {
  return Array.from({ length: limit }, () =>
    createFakeOrg({
      isFeatured,
      tag,
      cause,
    })
  );
}

const orgs = mockFetchOrgs({ limit: 50 });
console.log(orgs.map((org) => org.name));

/**
 * Fetch an array of orgs, optionally filtering by tags, categories, or featured status
 * @param fetchParams
 * @returns A promise with an array of organizations
 */
export async function fetchOrgs({
  limit,
  isFeatured,
  tag,
  cause,
}: FetchOrgParams): Promise<OrgProps[]> {
  return orgs.slice(0, limit);
}
