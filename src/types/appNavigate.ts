import {ReactNode} from "react"

export interface AppNavigate {
	to: string
	component: ReactNode
	dataTestId?: string
	title: string
	children?: AppNavigate[]
}
