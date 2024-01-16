import {Header} from "antd/es/layout/layout"
import React from "react"
import {Link} from "react-router-dom"

export const AppHeader = () => {
	return (
		<Header>
			<Link to="" data-testid="">
				Main
			</Link>
			<Link to="" data-testid="">
				Users
			</Link>
		</Header>
	)
}
