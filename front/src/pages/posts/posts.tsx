import {Button, Space, Spin} from "antd"
import React, {useEffect, useState} from "react"
import {useAppDispatch} from "../../helpers/useAppDispatch"
import {deletePost, getPosts, setInitialState, setIsConfirmationModalState, setSelectedPost} from "../../store/slices/postsSlice"
import {useAppSelector} from "../../helpers/useAppSelector"
import {PostCard} from "./components/postCard/postCard"
import {PlusOutlined} from "@ant-design/icons"
import {ConfirmationModal} from "./components/confirmationModal/confirmationModal"
import {LoadingState} from "../../constants/loadingState"
import {ResponsePostDto} from "./types/responsePostDto"

export const Posts = () => {
	const dispatch = useAppDispatch()

	const posts = useAppSelector((state) => state.posts.posts)

	const isDtoModalOpen = useAppSelector((state) => state.posts.isDtoModalOpen)
	const isConfirmationModalOpen = useAppSelector((state) => state.posts.isConfirmationModalOpen)

	const isLoading = useAppSelector((state) => state.posts.isLoading)

	const selectedPost = useAppSelector((state) => state.posts.selectedPost)

	const handleAdd = async () => {}

	const handleEdit = async () => {}

	const handleDelete = async (post: ResponsePostDto) => {
		console.log("post", post)

		dispatch(setSelectedPost(post))
		dispatch(setIsConfirmationModalState(true))
	}

	const handleConfirmationSuccess = async () => {
		if (selectedPost) {
			const params = {
				id: selectedPost.id,
			}
			await dispatch(deletePost(params))
		}
		dispatch(setIsConfirmationModalState(false))
		dispatch(getPosts())
	}
	const handleConfirmationCancel = async () => {
		dispatch(setIsConfirmationModalState(false))
	}

	useEffect(() => {
		dispatch(getPosts())
		return () => {
			dispatch(setInitialState())
		}
	}, [])

	if (isLoading === LoadingState.Pending) {
		return <Spin />
	}

	return (
		<>
			<Space direction="vertical">
				<Space>
					<Button icon={<PlusOutlined />} onClick={handleAdd}>
						Добавить
					</Button>
				</Space>
				<Space>
					{posts.map((post) => (
						<PostCard key={post.id} data={post} onEdit={handleEdit} onDelete={() => handleDelete(post)} />
					))}
				</Space>
			</Space>
			{isDtoModalOpen && <></>}
			{isConfirmationModalOpen && (
				<ConfirmationModal title="Удаление поста" onSuccess={handleConfirmationSuccess} onCancel={handleConfirmationCancel} />
			)}
		</>
	)
}
