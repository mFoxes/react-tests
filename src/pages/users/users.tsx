import {Space} from "antd"
import axios from "axios"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {UserDto} from "./types/userDto"

export const Users = () => {
	const [users, setUsers] = useState<UserDto[]>([])

	const loadUsers = async () => {
		try {
			const resp = await axios.get<UserDto[]>("https://jsonplaceholder.typicode.com/users")
			setUsers(resp.data)
		} catch (error) {
			console.log("[Error]", error)
		}
	}

	useEffect(() => {
		loadUsers()
	}, [])

	return (
		<Space direction="vertical">
			{users.map((user) => (
				<Space key={user.id} data-testid="user-item">
					<Link to={`${user.id}`}>{user.name}</Link>
				</Space>
			))}
		</Space>
	)
}
