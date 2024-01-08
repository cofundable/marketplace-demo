import { faker } from "@faker-js/faker";

export interface OrgProps {
  name: string;
  description: string;
  causes: string[];
  tags: string[];
  isFeatured: boolean;
  sharesCount: number;
}

/**
 * Optional parameters to set explicitly when generating a fake org
 * @field isFeatured  Optionally set the value of isFeatured explicitly
 * @field cause       Optionally add a specific cause to list of causes
 * @field tag         Optionally add a specific tag to list of tags
 */
interface OrgParams {
  isFeatured?: boolean;
  /* Optionally add a specific cause to the fake org's list of causes */
  cause?: string;
  /* Optionally add a specific tag to the fake org's list of causes */
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
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
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

/**
 * Fetch an array of orgs, optionally filtering by tags, categories, or featured status
 * @param fetchParams
 * @returns A promise with an array of organizations
 */
export async function fetchOrgs(
  fetchParams: FetchOrgParams
): Promise<OrgProps[]> {
  return mockFetchOrgs(fetchParams);
}
