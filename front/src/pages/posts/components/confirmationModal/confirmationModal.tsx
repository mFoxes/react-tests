import {Modal} from "antd"
import React from "react"

interface ConfirmationModalProps {
	title: string
	onSuccess: () => void
	onCancel: () => void
}

export const ConfirmationModal = ({...props}: ConfirmationModalProps) => {
	const handleSuccess = () => {
		props.onSuccess && props.onSuccess()
	}

	const handleCancel = () => {
		props.onCancel && props.onCancel()
	}

	return (
		<Modal title={props.title} open={true} onOk={handleSuccess} onCancel={handleCancel}>
			Вы уверены?
		</Modal>
	)
}
