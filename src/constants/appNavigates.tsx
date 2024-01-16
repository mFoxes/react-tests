import {Users} from "../pages/users/users"
import {AppNavigate} from "../types/appNavigate"

export const appNavigates: AppNavigate[] = [
	{
		to: "/users",
		component: <Users />,
		dataTestId: "navigate-users",
		title: "Users",
	},
]
