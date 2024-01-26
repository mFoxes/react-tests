import {ReactNode} from "react"

export type AppNavigate = {
	to?: string
	isIndex?: boolean
	disableLink?: boolean
	component?: ReactNode
	dataTestId?: string
	title?: string
	children?: AppNavigate[]
}
