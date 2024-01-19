import {Layout} from "antd"
import {Route, Routes} from "react-router-dom"
import {AppHeader} from "./components/appHeader/appHeader"
import "./app.css"
import {appNavigates} from "./constants/appNavigates"
import styled from "styled-components"
import {Content} from "antd/es/layout/layout"
import {AppNavigate} from "./types/appNavigate"

const App = () => {
	const getRoutes = (routeList: AppNavigate[]) => {
		return routeList.map((route, indx) => {
			const key = `route-${indx}`
			if (route.children) {
				return (
					<Route key={key} path={route.to}>
						{getRoutes(route.children)}
					</Route>
				)
			}

			if (route.isIndex) {
				return <Route key={key} index element={route.component} />
			}

			return <Route key={key} path={route.to} element={route.component} />
		})
	}

	return (
		<AppLayout>
			<AppHeader />
			<AppContent>
				<Routes>
					<Route path="/" element={<></>} />
					{getRoutes(appNavigates)}
				</Routes>
			</AppContent>
		</AppLayout>
	)
}

const AppLayout = styled(Layout)`
	min-height: 100vh;
`

const AppContent = styled(Content)`
	padding: 8px 16px;
`

export default App
