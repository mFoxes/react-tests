import React from "react"
import {fireEvent, render, screen} from "@testing-library/react"
import {SimpleTests} from "./simpleTests"

describe("SimpleTests page test", () => {
	test("renders title", () => {
		render(<SimpleTests />)
		const titleElement = screen.getByText(/Title/i)
		expect(titleElement).toBeInTheDocument()
	})

	test("renders data", async () => {
		render(<SimpleTests />)
		const dataElement = await screen.findByText(/data/i)
		expect(dataElement).toBeInTheDocument()
	})

	test("renders toggle data", async () => {
		render(<SimpleTests />)
		const btn = screen.getByTestId("toggle-btn")
		expect(screen.queryByTestId("toggle-elem")).toBeNull()
		fireEvent.click(btn)
		expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument()
	})

	test("renders input data", async () => {
		render(<SimpleTests />)
		const input = screen.getByTestId("print-input")
		expect(screen.queryByTestId("print-elem")).toContainHTML("")
		fireEvent.input(input, {target: {value: "test"}})
		expect(screen.queryByTestId("print-elem")).toContainHTML("test")
	})
})