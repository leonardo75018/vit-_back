import { Organization } from '../../domain/entities/organization'
import { OrganizationServce } from '../../domain/services/index'
import { prismaOrganizationsResponseMock } from './mocks'

export class PrismaOrganizationService implements OrganizationServce {
  finOrganizations(): Organization[] {
    return prismaOrganizationsResponseMock
  }
}
