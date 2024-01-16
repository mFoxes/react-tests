import {Button, Input, Space} from "antd"
import React, {ChangeEvent, useEffect, useState} from "react"
import {Typography} from "antd"

export const SimpleTests = () => {
	const [data, setData] = useState<null | Object>(null)
	const [toggle, setToggle] = useState(false)
	const [inputData, setInputData] = useState("")

	const handleToggle = () => {
		setToggle((value) => !value)
	}

	const handleInputDataChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputData(event.target.value)
	}

	useEffect(() => {
		setTimeout(() => {
			setData({})
		}, 100)
	}, [])

	return (
		<Space direction="vertical">
			<Typography.Title>Title</Typography.Title>

			{data && <Space>data</Space>}

			<Button onClick={handleToggle} data-testid="toggle-btn">
				Toggle
			</Button>
			{toggle && <Space data-testid="toggle-elem">toggle</Space>}

			<Input onChange={handleInputDataChange} placeholder="Input text..." data-testid="print-input" />
			<Space data-testid="print-elem">{inputData}</Space>
		</Space>
	)
}
