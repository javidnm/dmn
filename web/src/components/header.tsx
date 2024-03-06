import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { AlignJustify, Globe, Languages } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';

import ChangeLang from './change-lang';
export const Header = ({
	toggle,
}: {
	toggle: (type: 'DEFAULT' | 'TOGGLE') => void;
}) => {
	const location = useLocation();
	const [title, setTitle] = useState('Settings');
	const { t } = useTranslation();
	useEffect(() => {
		setTitle(
			location.pathname.split('/')[location.pathname.split('/').length - 1]
		);
	}, [location]);
	return (
		<div className=" bg-white p-2 w-full z-30 flex justify-between items-center">
			<div className="flex items-center">
				<Button
					className="px-2 mr-2 text-primary"
					onClick={() => {
						toggle('DEFAULT');
					}}
					variant={'ghost'}
				>
					<AlignJustify />
				</Button>
				<h1 className="text-xl leading-4  font-heading uppercase font-bold">
					{t('menus.' + title)}
				</h1>
			</div>
			<ChangeLang/>
		</div>
	);
};
