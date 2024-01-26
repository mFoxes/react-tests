import {Posts} from "../pages/posts/posts"
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
		children: [
			{
				isIndex: true,
				dataTestId: "navigate-users",
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
	{
		to: "posts",
		component: <Posts />,
		dataTestId: "navigate-posts",
		title: "Posts",
	},
]
