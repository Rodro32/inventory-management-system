import { TOrganization } from "../organization/organization.interface";
import { Organization } from "../organization/organization.model";

const createOrganizationIntoDB = async (data: TOrganization) => {
  const result = await Organization.create(data);
  return result;
};

export const UserService = {
  createOrganizationIntoDB,
};
