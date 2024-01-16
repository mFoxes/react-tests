import {Space} from "antd"
import {Header} from "antd/es/layout/layout"
import React from "react"
import {Link} from "react-router-dom"
import {appNavigates} from "../../constants/appNavigates"

export const AppHeader = () => {
	return (
		<Header>
			<Space>
				{appNavigates.map((navigate) => (
					<Link to={navigate.to} data-testid={navigate.dataTestId}>
						{navigate.title}
					</Link>
				))}
			</Space>
		</Header>
	)
}
