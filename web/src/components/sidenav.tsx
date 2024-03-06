import { LogOut } from 'lucide-react';
import { Fragment } from 'react';
import { Icons } from './icons';
import { Separator } from './ui/separator';
import { UserAvatar } from './user-avatar';
import { useTranslation } from "@/hooks/use-translation";
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@/hooks/use-user'
import logo from '@/assets/img/logo-white.svg';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import UserSetting from './user-setting';
export const Sidenav = ({
	toggle,
	visible,
}: {
	toggle: (type: 'DEFAULT' | 'TOGGLE') => void;
	visible: boolean;
}) => {
	const { t } = useTranslation();
	const {logoutUser} = useUser();
	const navigate = useNavigate()
		const sidenavData = [
		{
			title: t('menus.setting'),
			link: '/admin/setting',
			icon: Icons.settings,
		},
		{
			title: t('menus.news'),
			link: '/admin/news',
			icon: Icons.BellPlus,
		},
	];
	const {user} = useUser();

	return (
		<>
			<div
				className={cn(
					visible ? 'hidden' : 'block',
					'lg:hidden bg-black/60 fixed left-0 top-0 z-10 h-screen w-full'
				)}
			></div>

			<div
				className={cn(
					visible ? '-left-64' : 'left-0',
					'w-64 lg:border-r   fixed top-0 transition-all z-20'
				)}
			>
				<div className="bg-black shadow md:h-full flex flex-col justify-between min-h-screen">
					<div className='text-white'>
						<div className="w-full p-5 border-b border-white/15">
							<img src={logo} width={125} height={125} alt="" />
						</div>
						<ul className="mt-6 px-6">
							{sidenavData.map((data, idx) => (
								<Fragment key={idx}>
									<Link to={data.link}>
									<li
										className="flex  gap-4 w-full  text-white cursor-pointer items-center"
										onClick={() => {
											toggle('TOGGLE');
										}}
									>
											<div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
												{<data.icon size={15} className="text-white" />}
											</div>
											<span className="text-sm  text-white  capitalize">
												{data.title}
											</span>
									</li>
										</Link>
									<Separator
										orientation="vertical"
										className="h-6 ml-3 last:hidden bg-primary/30"
									/>
								</Fragment>
							))}
						</ul>
					</div>
					<div className="border-t border-white/15 px-6 py-3">
						<div className="flex items-center gap-4">
							<div className="flex items-center justify-between w-full">
								<div>
									<h1 className="text-sm text-white font-bold leading-4">
										{user?.name}
									</h1>
									<h2 className="text-xs text-white">{user?.email}</h2>
								</div>
								<UserSetting/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
