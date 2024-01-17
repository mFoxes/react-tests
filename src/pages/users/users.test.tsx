import {render, screen} from "@testing-library/react"
import axios from "axios"
import {userTestData} from "./constants/userTestData"
import {UserDto} from "./types/userDto"
import {Users} from "./users"

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
