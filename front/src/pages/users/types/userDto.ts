import {Address} from "./address"
import {Company} from "./company"

export interface UserDto {
	id: number
	name: string
	username: string
	email: string
	address: Address
	phone: string
	website: string
	company: Company
}
