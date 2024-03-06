import { Navigate, RouteObject } from 'react-router-dom';
import AdminLayout from './layout';
import Setting from './setting/setting';
import News from './news/news';
import Profile from './profile/profile';

function AdminRouter() {
	return [
		{
			path: '',
			element: <AdminLayout />,
			children: [
				{
					path: '',
					element: <Navigate to="/admin/setting" />,
				},
				{
					path: 'setting',
					element: <Setting />,
				},
				{
					path: 'news',
					element: <News />,
				},
				{
					path: 'profile',
					element: <Profile />,
				},
			],
		},
	] as RouteObject[];
}

export default AdminRouter;
