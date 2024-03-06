import { ScrollArea } from '@/components/ui/scroll-area';
import { Sidenav } from '@/components/sidenav';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/header';

export default function AdminLayout() {
	const [isToggleVisible, setIsToggleVisieble] = useState(false);
	const toggle = (type: 'DEFAULT' | 'TOGGLE' = 'DEFAULT') => {
		if (window.screen.width <= 768 && type == 'TOGGLE') {
			setIsToggleVisieble(!isToggleVisible);
		} else if (type == 'DEFAULT') {
			setIsToggleVisieble(!isToggleVisible);
		}
	};
	return (
		<div className="w-full h-full">
			<div className="flex flex-no-wrap">
				<Sidenav toggle={toggle} visible={isToggleVisible} />
				<div
					className={cn(
						isToggleVisible ? 'ml-0' : 'lg:ml-64',
						' bg-slate-100 transition-all w-full min-h-screen'
					)}
				>
					<Header toggle={toggle} />
					<div className="p-5">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}
