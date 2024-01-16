import {Layout} from "antd"
import {Route, Routes} from "react-router-dom"
import {AppHeader} from "./src/components/appHeader/appHeader"
import {Users} from "./src/pages/users/users"
import styled from "styled-components"

function App() {
	return (
		<StyledLayout>
			<AppHeader />
			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</StyledLayout>
	)
}

const StyledLayout = styled(Layout)`
	body {
		margin: 0;
	}
`

export default App
