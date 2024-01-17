import {SimpleTests} from "../pages/simpleTests/simpleTests"
import {User} from "../pages/users/subPages/user/user"
import {Users} from "../pages/users/users"
import {AppNavigate} from "../types/appNavigate"

export const appNavigates: AppNavigate[] = [
	{
		to: "simple-tests",
		component: <SimpleTests />,
		dataTestId: "navigate-simple-tests",
		title: "Simple Tests",
	},
	{
		to: "users",
		dataTestId: "navigate-users",
		children: [
			{
				isIndex: true,
				component: <Users />,
				title: "Users",
			},
			{
				to: ":id",
				disableLink: true,
				component: <User />,
			},
		],
	},
]
