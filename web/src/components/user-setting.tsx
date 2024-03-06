import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/hooks/use-translation';
import { LogOut, Settings, User } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@/hooks/use-user';
const UserSetting = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const {logoutUser} = useUser();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="default"
					size="icon"
					className="ml-auto hidden h-8 lg:flex"
				>
					<Settings className="h-4 w-4 text-white" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-[150px]">
				<DropdownMenuItem onClick={() => navigate('/admin/profile')}>
					<User className="mr-2 h-4 w-4" />
					<span>{t('profileSetting')}</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={()=>{
					logoutUser();
					navigate('/auth')
				}}>
					<LogOut className="mr-2 h-4 w-4" />
					<span>{t('singOut')}</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserSetting;
