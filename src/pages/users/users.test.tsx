import {render, screen, waitFor} from "@testing-library/react"
import axios from "axios"
import {userTestData} from "./constants/userTestData"
import {UserDto} from "./types/userDto"
import {Users} from "./users"

jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>

describe("Users page test", () => {
	const renderComponent = () => render(<Users />)

	let response: {data: UserDto[]} = {
		data: [],
	}
	beforeEach(() => {
		response = {
			data: userTestData,
		}
	})
	afterEach(() => {
		jest.clearAllMocks()
	})
	test("renders users", async () => {
		mockedAxios.get.mockResolvedValue(response)
		renderComponent()

		const users = await screen.findAllByTestId("user-item")
		expect(users.length).toBe(10)
		expect(mockedAxios.get).toBeCalledTimes(1)
	})
})
