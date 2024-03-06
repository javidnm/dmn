import { Navigate, Outlet } from 'react-router-dom';
function AuthGuard({ isAllowed, redirectPath = '/auth', children }:any) {
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}
	return children ? children : <Outlet />;
}

export default AuthGuard;