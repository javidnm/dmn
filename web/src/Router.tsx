import { Navigate, Outlet, RouteObject } from 'react-router-dom';
import Auth from './views/Auth/layout';
import AuthRouter from './views/Auth/Router';
import AdminRouter from './views/Admin/Router';
import AuthGuard from './views/Auth/auth-guard';
export default (user: any): RouteObject[] =>
	[
		{
			path: 'auth',
			element: !user ? (
				<AuthGuard isAllowed={!user}>
					<Auth />
				</AuthGuard>
			) : (
				<Navigate to="/admin" />
			),
			children: AuthRouter(),
		},
		{
			path: 'admin',
			element: (
        <AuthGuard isAllowed={!!user}>
          <Outlet />
        </AuthGuard>
      ),
			children: AdminRouter(),
		},
		{
			path: '*',
			element: <Navigate to="/admin" />,
		},
	] as RouteObject[];
