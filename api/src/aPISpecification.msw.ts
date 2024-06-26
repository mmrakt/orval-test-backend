/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * API Specification
 * OpenAPI spec version: 1.0.0
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  Pet,
  Pets
} from './aPISpecification.schemas'

export const getListPetsResponseMock = (overrideResponse: any = {}): Pets => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.number.int({min: undefined, max: undefined}), name: faker.word.sample(), tag: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})))

export const getShowPetByIdResponseMock = (overrideResponse: any = {}): Pet => ({id: faker.number.int({min: undefined, max: undefined}), name: faker.word.sample(), tag: faker.helpers.arrayElement([faker.word.sample(), undefined]), ...overrideResponse})


export const getListPetsMockHandler = (overrideResponse?: Pets) => {
  return http.get('*/pets', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getListPetsResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getCreatePetsMockHandler = () => {
  return http.post('*/pets', async () => {
    await delay(1000);
    return new HttpResponse(null,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}

export const getShowPetByIdMockHandler = (overrideResponse?: Pet) => {
  return http.get('*/pets/:petId', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(overrideResponse ? overrideResponse : getShowPetByIdResponseMock()),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
  })
}
export const getAPISpecificationMock = () => [
  getListPetsMockHandler(),
  getCreatePetsMockHandler(),
  getShowPetByIdMockHandler()]
