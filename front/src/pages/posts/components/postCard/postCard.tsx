import React from "react"
import {ResponsePostDto} from "../../types/responsePostDto"
import {Card} from "antd"
import {DeleteOutlined, EditOutlined} from "@ant-design/icons"
import styled from "styled-components"

interface PostCardProps {
	data: ResponsePostDto
	onEdit?: () => void
	onDelete?: () => void
}

export const PostCard = ({...props}: PostCardProps) => {
	const handleEdit = () => {
		props.onEdit && props.onEdit()
	}

	const handleDelete = () => {
		props.onDelete && props.onDelete()
	}

	return (
		<StyledCard title={props.data.title} actions={[<DeleteOutlined onClick={handleDelete} />, <EditOutlined onClick={handleEdit} />]}>
			{props.data.content}
		</StyledCard>
	)
}

const StyledCard = styled(Card)`
	width: 150px;
	height: 200px;
	display: flex;
	flex-direction: column;
	& .ant-card-body {
		height: 100%;
	}
`
