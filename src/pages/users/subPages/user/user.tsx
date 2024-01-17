import axios from "axios"
import React, {useEffect, useState} from "react"
import {UserDto} from "../../types/userDto"
import {Space} from "antd"
import {useParams} from "react-router-dom"

export const User = () => {
	const {id} = useParams()
	const [userData, setUserData] = useState<UserDto | undefined>()

	const loadUserData = async () => {
		try {
			const resp = await axios.get<UserDto>(`https://jsonplaceholder.typicode.com/users/${id}`)
			setUserData(resp.data)
		} catch (error) {
			console.log("[Error]", error)
		}
	}

	useEffect(() => {
		if (id) {
			loadUserData()
		}
	}, [])

	return (
		<Space>
			{userData?.id}. {userData?.name} {userData?.email}
		</Space>
	)
}
