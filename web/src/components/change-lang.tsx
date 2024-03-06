import React from 'react';

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages } from '@/i18n';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
const ChangeLang = () => {
  const { t, switchLanguage } = useTranslation();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="ml-auto hidden h-8 lg:flex"
				>
					<Globe className="mr-2 h-4 w-4 text-primary" />
					{t('DisplayLang')}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[150px]">
				<DropdownMenuLabel>Changeg Language</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{languages.map((row) => {
					return (
						<DropdownMenuCheckboxItem
							key={row.value}
							className="capitalize"
							checked={row.value === t('LANGUAGE')}
							onCheckedChange={() => switchLanguage(row.value)}
						>
							{row.label}
						</DropdownMenuCheckboxItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ChangeLang;
