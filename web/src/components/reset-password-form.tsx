'use client';

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
import { resetPassordSchema } from '@/lib/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

const formSchema = resetPassordSchema;

export function ResetPasswordForm() {
	const { t } = useTranslation();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	function onSubmit(values: z.infer<typeof formSchema>) {}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="new_password"
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
				<FormField
					control={form.control}
					name="confirm_password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="font-extrabold">
								{t('reset.confirm')} {t('password')}
							</FormLabel>
							<FormControl>
								<Input
									placeholder={`${t('reset.confirm')} ${t('password')}`}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full font-extrabold text-lg">
					{t('submit')}
				</Button>
				<div className="text-center text-slate-500">
					{t('backTo')}
					<Link to="/auth" className="text-primary underline font-bold ml-2">
						{t('signin')}
					</Link>
				</div>
			</form>
		</Form>
	);
}
