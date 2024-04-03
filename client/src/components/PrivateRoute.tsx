import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'

interface PrivateRouteProps {
	path: string
	element: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
	const { isAuth } = useAppSelector((state: any) => state.actionSlice)

	return isAuth ? (
		<Route path={path} element={element} />
	) : (
		<Navigate to='/login' replace />
	)
}

export default PrivateRoute
