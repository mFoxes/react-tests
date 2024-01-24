import {Space} from "antd"
import React, {useEffect} from "react"
import {useAppDispatch} from "../../helpers/useAppDispatch"
import {getPosts, setInitialState} from "../../store/slices/postsSlice"
import {useAppSelector} from "../../helpers/useAppSelector"
import {PostCard} from "./components/postCard/postCard"

export const Posts = () => {
	const dispatch = useAppDispatch()

	const posts = useAppSelector((state) => state.posts.posts)

	useEffect(() => {
		dispatch(getPosts())
		return () => {
			dispatch(setInitialState())
		}
	}, [])

	return (
		<Space direction="vertical">
			<Space>Tooltip</Space>
			<Space>
				{posts.map((post) => (
					<PostCard {...post} />
				))}
			</Space>
		</Space>
	)
}
