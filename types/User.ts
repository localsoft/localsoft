import { faker } from '@faker-js/faker'
import Role from "./Role.ts"
import { assert } from "$std/assert/assert.ts";

export default interface User {
	email: string
	role: Role
	uid: string
	username: string
}

export const createUser = (): User => {
	return {
		email: faker.internet.email(),
		role: faker.helpers.enumValue(Role),
		uid: faker.string.uuid(),
		username: faker.internet.userName(),
	}
}

export const createUsers = (count: number): User[] => {
	assert(count > 0, "parameter 'count' must be greater than zero")
	return faker.helpers.multiple<User>(createUser, { count })
}