import { SiteForm } from '@/components/site-form';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import React, { useEffect, useState } from 'react';

import { useSite } from '@/hooks/use-site';
import { fetcher } from '@/client';
import { useRequest } from 'ahooks';
import { DataTable } from '@/components/dataTable/data-table';
import { columns } from './columns';
import { toast } from '@/components/ui/use-toast';
import { NewsForm } from '@/components/news-form';

const site = fetcher.path('/api/site').method('get').create();
const siteDelete = fetcher.path('/api/site').method('delete').create();
const siteUpdate = fetcher.path('/api/site').method('put').create();
const Setting = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [data, setData] = useState({
		items: [],
		count: 0,
	});
	const [type, setType] = useState<{type:'ADD'|'EDIT',data:any}>({
		type: 'ADD',
		data:{}
	});
	const { runAsync, loading ,refresh} = useRequest(site, {
		manual: true,
		onSuccess: (response: any) => {
			if (response.data) {
				setData({
					count: response.data.count,
					items: response.data.items,
				});
				setType({
					type:'ADD',
					data:{}
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
		type:'NEWS',
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
					<div className="grid grid-cols-3">
						<div className="col-span-2"></div>
						<div className="text-right">
							<NewsForm refresh={refresh}  formValues={type} setIsOpen={setIsOpen} isOpen={isOpen} />
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
