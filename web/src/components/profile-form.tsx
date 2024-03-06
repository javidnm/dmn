import { fetcher } from '@/client';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/hooks/use-translation';
import { useSession, useUser } from '@/hooks/use-user';
import { profileSetting } from '@/lib/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRequest } from 'ahooks';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';
import { toast } from './ui/use-toast';
const formSchema = profileSetting;
const login = fetcher.path('/api/user/update').method('put').create();
export function ProfileForm() {
	const navigation = useNavigate();
	const { updateSessionId } = useSession();
	const { updateUser } = useUser();
	const { runAsync, loading } = useRequest(login, {
		manual: true,
		onSuccess: (res: any) => {
			if (res.data) {
				updateUser(res.data.user);
				toast({
					variant: 'success',
					title: 'Success',
					description: res.data.message,
				});
			}
		},
	});
	const { t } = useTranslation();
	const { user } = useUser();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: user?.name,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		runAsync(values as any);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="col-span-2">
								<FormLabel className="font-extrabold">{t('name')}</FormLabel>
								<FormControl>
									<Input placeholder={t('enterName')} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="font-extrabold">
									{t('reset.new')} {t('password')}
								</FormLabel>
								<FormControl>
									<Input
										placeholder={`${t('reset.new')} ${t('password')}`}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="text-right">
					<Button
						isLoading={loading}
						type="submit"
						className="w-40 mt-5 font-extrabold text-lg"
					>
						{t('submit')}
					</Button>
				</div>
			</form>
		</Form>
	);
}
