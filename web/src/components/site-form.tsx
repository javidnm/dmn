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
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { useTranslation } from '@/hooks/use-translation';
import { SiteSchema, types } from '@/lib/schemas/site';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRequest } from 'ahooks';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Previews from './drag-zone';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { toast } from './ui/use-toast';
import { ckEditerConfig } from '@/lib/utils';
import { Input } from './ui/input';
const formSchema = SiteSchema;
const site = fetcher.path('/api/site').method('post').create();
const siteUpdate = fetcher.path('/api/site').method('put').create();
const uploadFilesApi = fetcher
	.path('/api/media/upload')
	.method('post')
	.create();
interface iSiteForm {
	formValues?: any;
	setIsOpen: (value) => void;
	isOpen: boolean;
	refresh(): void;
}
export function SiteForm({ formValues, isOpen, setIsOpen, refresh }: iSiteForm) {

	const [uplaodLoading, setUplaodLoading] = useState(false);
	const { type, data } = formValues;
	const { runAsync, loading } = useRequest(site, {
		manual: true,
		onSuccess: ((response: any) => {
			toast({
				variant: 'success',
				title: 'Success',
				description: response.data?.message!
			})
			refresh();
			setIsOpen(false);
			form.reset(resetFrom())
		})
	});
	const { runAsync: updateRunAsync, loading: Updateloading } = useRequest(siteUpdate, {
		manual: true,
		onSuccess: ((response: any) => {
			toast({
				variant: 'success',
				title: 'Success',
				description: response.data?.message!
			})
			refresh();
			setIsOpen(false);
			form.reset(resetFrom())
		})
	});
	const { t } = useTranslation();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			meta: {
				data: '',
				title: ''
			}
		},
	});

	const resetFrom = () => {
		return {
			meta: {
				data: '',
				title: ''
			},
		}
	}
	function onSubmit(values: z.infer<typeof formSchema>) {
		let data: any = values;
		data.meta = JSON.stringify(data.meta)
		if (type === 'EDIT') {
			updateRunAsync(data);
			return;
		}
		runAsync(data);
	}
	const setFormValue = () => {
		if (type == 'EDIT') {
			form.setValue('id', data.id);
			form.setValue('type', data.type);
			form.setValue('media', data.media);
			form.setValue('meta', data.meta);
			form.setValue('active', data.active);
		}
	}
	useEffect(() => {
		setFormValue();
	}, [isOpen])
	return (
		<Sheet open={isOpen} onOpenChange={(e) => {
			setIsOpen(e); form.reset(resetFrom())
		}}>
			<SheetTrigger asChild>
				<Button>{t('page.siteSetting')}</Button>
			</SheetTrigger>
			<SheetContent className="sm:max-w-2xl">
				<SheetHeader>
					<SheetTitle>{t('page.configurePage')}</SheetTitle>
				</SheetHeader>
				<div className="py-4">
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>

							<FormField
								control={form.control}
								name="type"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-extrabold">{t('page.type')}</FormLabel>
										<FormControl>
											<Select defaultValue={field.value} onValueChange={field.onChange}>
												<SelectTrigger>
													<SelectValue placeholder="Select type" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														{types.filter(r => r !== 'NEWS').map((row, idx) => (
															<SelectItem key={idx} value={row}>
																{row?.replace(/_/g, ' ')}
															</SelectItem>
														))}
													</SelectGroup>
												</SelectContent>
											</Select>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="meta.title"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="font-extrabold">{t('page.title')}</FormLabel>
										<FormControl>
											<Input placeholder='Enter title' {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="meta.data"
								render={({ field }) => (
									<FormItem className="mt-5">
										<FormLabel className="font-bold">{t('page.meta')}</FormLabel>
										<FormControl>
											<CKEditor
												config={ckEditerConfig}
												editor={ClassicEditor}
												data={field.value ? field.value : ''}
												onChange={({ }, editor) => {
													const data = editor.getData();
													field.onChange(data);
												}}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="media"
								render={({ field }) => (
									<FormItem className="mt-4">
										<FormLabel className="font-bold">{t('page.upload')}</FormLabel>
										<FormControl>
											<Previews
												setUplaodLoading={setUplaodLoading}
												filesUrl={field.value ? JSON.parse(field.value) : []}
												onFile={(files) => { field.onChange(JSON.stringify(files)); }}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="text-right mt-5">
								<Button isLoading={loading || uplaodLoading} type="submit">
									{t('submit')}
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</SheetContent>
		</Sheet>
	);
}
