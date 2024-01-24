import React from "react"
import {ResponsePostDto} from "../../types/responsePostDto"
import {Card} from "antd"

type PostCardProps = ResponsePostDto

export const PostCard = ({...props}: PostCardProps) => {
	return <Card title={props.title}>{props.content}</Card>
}
