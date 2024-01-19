import {render, screen} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"
import App from "./app"
import userEvent from "@testing-library/user-event"

describe("appHeader tests", () => {
	test("route", async () => {
		render(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		)
		const simpleTestsLink = screen.getByTestId("navigate-simple-tests")
		userEvent.click(simpleTestsLink)
		expect(await screen.findByTestId("simple-tests-page")).toBeInTheDocument()
		const usersTestLink = screen.getByTestId("navigate-users")
		userEvent.click(usersTestLink)
		expect(await screen.findByTestId("users-page")).toBeInTheDocument()
	})
})
