import {Space} from "antd"
import React, {useEffect, useState} from "react"
import {UserDto} from "./types/userDto"
import axios from "axios"

export const Users = () => {
	const [users, setUsers] = useState<UserDto[]>([])

	const loadUsers = async () => {
		try {
			const resp = await axios.get<UserDto[]>("https://jsonplaceholder.typicode.com/users")
			setUsers(resp.data)
		} catch (error) {
			console.log("[Error] ", error)
		}
	}

	useEffect(() => {
		loadUsers()
	}, [])

	return (
		<Space direction="vertical">
			{users.map((user) => (
				<Space key={user.id} data-testid="user-item">
					{user.name}
				</Space>
			))}
		</Space>
	)
}
