import { TOrganization } from "./organization.interface";
import { Organization } from "./organization.model";


const getAllOrganizationsFromDB = async () => {
  const organizations = await Organization.find({})
  return organizations;
};

export const OrganizationService = {
  getAllOrganizationsFromDB,
};

