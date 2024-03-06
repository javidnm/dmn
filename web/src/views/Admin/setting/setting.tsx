import { SiteForm } from '@/components/site-form';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';

import { useSite } from '@/hooks/use-site';
import { fetcher } from '@/client';
import { useRequest } from 'ahooks';
import { DataTable } from '@/components/dataTable/data-table';
import { columns } from './columns';
import { toast } from '@/components/ui/use-toast';
import { Select,SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue } from '@/components/ui/select';
import { types } from '@/lib/schemas/site';
import { Button } from '@/components/ui/button';
import { FilterXIcon } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const site = fetcher.path('/api/site').method('get').create();
const siteDelete = fetcher.path('/api/site').method('delete').create();
const siteUpdate = fetcher.path('/api/site').method('put').create();
const Setting = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [data, setData] = useState({
		items: [],
		count: 0,
	});
	const [type, setType] = useState<{ type: 'ADD' | 'EDIT', data: any }>({
		type: 'ADD',
		data: {}
	});
	const { runAsync, loading, refresh } = useRequest(site, {
		manual: true,
		onSuccess: (response: any) => {
			if (response.data) {
				setData({
					count: response.data.count,
					items: response.data.items,
				});
				setType({
					type: 'ADD',
					data: {}
				})
			}
		},
	});
	const { runAsync: deleteRunAsync, loading: deleteLoading } = useRequest(siteDelete, {
		manual: true,
		onSuccess: (response: any) => {
			if (response.data) {
				runAsync(query as any);
				toast({
					variant: 'success',
					title: 'Success',
					description: response.data?.message!
				})
			}
		},
	});
	
	const { t } = useTranslation();
	const { runAsync: udpateRunAsync, loading: updateLoading } = useRequest(siteUpdate, {
		manual: true,
		onSuccess: (response: any) => {
			if (response.data) {
				runAsync(query as any);
				toast({
					variant: 'success',
					title: 'Success',
					description: response.data?.message!
				})
			}

		},
	});
	const [query, setQuery] = useState({
		type:'',
		skip: 0,
		take: 10,
	});

	useEffect(() => {
		runAsync(query as any);
	}, [query]);
	return (
		<div>
			<Card>
				<CardTitle className="p-4 border-b">
					<div className="grid grid-cols-2">
						<div>
							<div className='flex items-center gap-x-3'>
								<Select value={query.type}  onValueChange={(e)=> setQuery({...query,type:e})}>
									<SelectTrigger>
										<SelectValue placeholder={t('page.selectType')} />
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
								<Button variant={'secondary'} onClick={()=> setQuery({...query,type:''})}> <FilterXIcon size={15}/>{t('page.clearFilter')}</Button>
							</div>
						</div>
						<div className="text-right">
							<SiteForm refresh={refresh} formValues={type} setIsOpen={setIsOpen} isOpen={isOpen} />
						</div>
					</div>
				</CardTitle>
				<CardContent className="p-4">
					<DataTable
						query={query}
						setQuery={setQuery}
						count={data.count}
						isLoading={loading && type.type !== 'EDIT'}
						data={data.items}
						columns={columns({ setIsOpen, loading: updateLoading, deleteRunAsync, udpateRunAsync, updateLoading, setType })}
					/>
				</CardContent>
			</Card>
		</div>
	);
};

export default Setting;
