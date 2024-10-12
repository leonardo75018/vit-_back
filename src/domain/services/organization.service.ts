import { Organization } from '../entities/organization'

export interface OrganizationServce {
  finOrganizations(): Organization[]
}
