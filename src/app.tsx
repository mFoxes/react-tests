import {Layout} from "antd"
import {Route, Routes} from "react-router-dom"
import {AppHeader} from "./components/appHeader/appHeader"
import "./app.css"
import {appNavigates} from "./constants/appNavigates"
import styled from "styled-components"
import {Content} from "antd/es/layout/layout"

const App = () => {
	return (
		<AppLayout>
			<AppHeader />
			<AppContent>
				<Routes>
					<Route path="/" element={<></>} />
					{appNavigates.map((navigate) => (
						<Route path={navigate.to} element={navigate.component} />
					))}
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
