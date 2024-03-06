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
import { forgotPasswordSchema } from '@/lib/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRequest } from 'ahooks';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';
import { useToast } from './ui/use-toast';

const formSchema = forgotPasswordSchema;
// const forgotPassword = fetcher
// 	.path('/api/auth/forgot-password')
// 	.method('post')
// 	.create();
export function ForgotPasswordForm() {
	// const { t } = useTranslation();
	// const { toast } = useToast();
	// const { runAsync, loading } = useRequest(forgotPassword, {
	// 	manual: true,
	// 	onSuccess: (res: any) => {
  //     if (res.data) {
	// 			toast({
	// 				variant: 'info',
	// 				title: 'Success',
	// 				description: res.data?.message,
	// 			});
	// 		}
	// 	},
	// });
	// const form = useForm<z.infer<typeof formSchema>>({
	// 	resolver: zodResolver(formSchema),
	// });

	// function onSubmit(values: z.infer<typeof formSchema>) {
  //   runAsync(values as any)
	// }

	return (
		<></>
		// <Form {...form}>
		// 	<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
		// 		<FormField
		// 			control={form.control}
		// 			name="email"
		// 			render={({ field }) => (
		// 				<FormItem>
		// 					<FormLabel className="font-extrabold">{t('email')}</FormLabel>
		// 					<FormControl>
		// 						<Input placeholder={t('enterEmail')} {...field} />
		// 					</FormControl>
		// 					<FormMessage />
		// 				</FormItem>
		// 			)}
		// 		/>
		// 		<Button isLoading={loading} type="submit" className="w-full font-extrabold text-lg">
		// 			{t('submit')}
		// 		</Button>
		// 		<div className="text-center text-slate-500">
		// 			{t('backTo')}
		// 			<Link to="/auth" className="text-primary underline font-bold ml-2">
		// 				{t('signin')}
		// 			</Link>
		// 		</div>
		// 	</form>
		// </Form>
	);
}
