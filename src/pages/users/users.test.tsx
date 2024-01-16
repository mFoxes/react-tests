import {render, screen} from "@testing-library/react"
import {Users} from "./users"
import {userTestData} from "./constants/userTestData"
import axios, {AxiosResponse} from "axios"
import {UserDto} from "./types/userDto"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("Users page test", () => {
	let response: {data: UserDto[]} = {
		data: [],
	}
	beforeEach(() => {
		response = {
			data: userTestData,
		}
	})
	test("renders users", async () => {
		mockedAxios.get.mockResolvedValue(response)
		render(<Users />)
		const users = await screen.findAllByTestId("user-item")
		expect(users.length).toBe(10)
		expect(mockedAxios.get).toBeCalledTimes(1)
	})
})
