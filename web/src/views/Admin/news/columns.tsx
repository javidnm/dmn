import { DataTableColumnHeader } from '@/components/dataTable/data-table-column-header';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ColumnDef } from '@tanstack/react-table';
import { Delete, Edit, Eye, EyeOff, Trash2 } from 'lucide-react';
import { Fragment } from 'react';
import DayJS from 'react-dayjs';
export const columns = ({ setIsOpen, loading, deleteRunAsync, udpateRunAsync, updateLoading, setType }): ColumnDef<any>[] => [
	{
		accessorKey: 'type',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Type" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-normal text-black/80">
						{row.getValue('type')}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'meta',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Meta" />
		),
		cell: ({ row }) => {
			const meta = JSON.parse(row.getValue('meta'));
			return (
				<div className="flex flex-col gap-y-3">
					<Label className="max-w-[500px] truncate text-black/80 flex  gap-x-2">
						<span className='font-bold'>News Date :</span><DayJS format="MMM-DD-YYYY">{meta?.date}</DayJS>
					</Label>
					<Label className="max-w-[500px] truncate text-black/80">
						<span className='font-bold'>Title :</span> {meta?.title}
					</Label>
					<Label className="max-w-[500px] truncate text-black/80">
						<span className='font-bold'>Label :</span> <span className='uppercase'>{meta?.label}</span>
					</Label>
					<Label className="max-w-[500px] font-bold text-black/80">
							Meta: 
					</Label>
					<div dangerouslySetInnerHTML={{ __html: meta?.data }} className="max-w-[500px] line-clamp-3 font-norma">
					</div>

				</div>
			);
		},
	},
	{
		accessorKey: 'media',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="Media" />
		),
		cell: ({ row }) => {
			const media = JSON.parse(row.getValue('media') || '');
			return (
				<div className="flex space-x-2">
					<div className="max-w-[500px] flex items-center gap-x-2">
						{
							media.map((row, idx) => (
								<Fragment key={idx}>
									<img src={row} className='w-20' />
								</Fragment>
							))
						}
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: 'createdAt',
		header: ({ column }) => (
			<DataTableColumnHeader column={column} title="created at" />
		),
		cell: ({ row }) => {
			return (
				<div className="flex space-x-2">
					<span className="max-w-[500px] truncate font-normal text-black/80">
						<DayJS format="MMM-DD-YYYY">{row.getValue('createdAt')}</DayJS>
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: 'action',
		header: () => (
			<span className="max-w-[400px] truncate font-semibold text-black">
				Action
			</span>
		),
		cell: ({ row }) => {
			const data = row.original
			const metaData = JSON.parse(data.meta);
			return (
				<div className="flex space-x-2">
					<Button
						className="w-8 h-8"
						size={'icon'}
						onClick={() => {
							setType({
								type: 'EDIT',
								data: {
									id: row.original.id,
									type: row.original.type,
									meta:{
										title:metaData.title,
										label:metaData.label,
										date:new Date(metaData.date),
										data:metaData.data,
									},
									media: row.original.media,
									active: row.original.active,
								}
							})
							setIsOpen(true)
						}}
					>
						<Edit size={15} />
					</Button>
					<Button
						className="w-8 h-8"
						size={'icon'}
						onClick={() => {
							setType({
								type: 'EDIT'
							})
							deleteRunAsync({
								id: data.id,
							})
						}}
						isLoading={loading}
					>
						<Trash2 size={15} />
					</Button>
					<Button
						className="w-8 h-8"
						size={'icon'}
						onClick={() => {
							setType({
								type: 'EDIT'
							})
							udpateRunAsync(
								{
									id: data.id,
									active: !data.active,
								}
							)
						}}
						isLoading={updateLoading}
					>
						{data.active ? <Eye size={15} /> : <EyeOff size={15} />}
					</Button>
				</div>
			);
		},
	},
];
