import {Space} from "antd"
import {Header} from "antd/es/layout/layout"
import React, {ReactNode} from "react"
import {Link} from "react-router-dom"
import {appNavigates} from "../../constants/appNavigates"
import {AppNavigate} from "../../types/appNavigate"

export const AppHeader = () => {
	const getLinks = (routeList: AppNavigate[], parentPath?: string): ReactNode[] => {
		return routeList
			.filter((route) => !route.disableLink)
			.map((route) => {
				if (route.children) {
					return getLinks(route.children, route.to)
				}

				return (
					<Link to={route.to ?? parentPath ?? ""} data-testid={route.dataTestId}>
						{route.title}
					</Link>
				)
			})
	}

	return (
		<Header>
			<Space>{getLinks(appNavigates)}</Space>
		</Header>
	)
}
