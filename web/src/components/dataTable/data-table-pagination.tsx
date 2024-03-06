import {
	ChevronLeftIcon,
	ArrowRight,
	ArrowLeft,
	ChevronRight,
} from 'lucide-react';
import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface DataTablePaginationProps<TData> {
	table: Table<TData>;
	count: number;
	setQuery: Function;
	query: any;
	isLoading: boolean;
}

export function DataTablePagination<TData>({
	table,
	count,
	setQuery,
	query,
	isLoading,
}: DataTablePaginationProps<TData>) {
	return (
		<div className="flex items-center justify-between px-2">
			<div className="flex-1 text-sm text-muted-foreground">
				{table.getFilteredSelectedRowModel().rows.length} of {count} row(s)
				selected.
			</div>
			<div className="flex items-center space-x-6 lg:space-x-8">
				<div className="flex items-center space-x-2">
					<p className="text-sm font-medium">Rows per page</p>
					<Select
						value={`${query?.take}`}
						onValueChange={(value: any) => {
							table.setPageSize(Number(value));
							setQuery({ ...query, take: Number(value) });
						}}
					>
						<SelectTrigger className="h-8 w-[70px]">
							<SelectValue placeholder={table.getState().pagination.pageSize} />
						</SelectTrigger>
						<SelectContent side="top">
							{[10, 20, 30, 40, 50].map((pageSize) => (
								<SelectItem key={pageSize} value={`${pageSize}`}>
									{pageSize}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex w-[100px] items-center justify-center text-sm font-medium">
					Page {table.getState().pagination.pageIndex + 1} of{' '}
					{table.getPageCount()}
				</div>
				<div className="flex items-center space-x-2">
					{/* <Button
						isLoading={isLoading && count>0}
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex"
						onClick={() => table.setPageIndex(0)}
						disabled={count < query?.take}
					>
						<span className="sr-only">Go to first page</span>
						<ArrowLeft className="h-4 w-4" />
					</Button> */}
					<Button
						// isLoading={isLoading && count>0}
						variant="outline"
						className="h-8 w-8 p-0"
						onClick={() => setQuery({...query ,skip : query?.skip-10})}
						disabled={query?.skip < 10}
					>
						<span className="sr-only">Go to previous page</span>
						<ChevronLeftIcon className="h-4 w-4" />
					</Button>
					<Button
						// isLoading={isLoading && count>0}
						variant="outline"
						className="h-8 w-8 p-0"
						onClick={() => setQuery({...query ,skip : query?.skip+10})}
						disabled={count < 10}
					>
						<span className="sr-only">Go to next page</span>
						<ChevronRight className="h-4 w-4" />
					</Button>
					{/* <Button
						isLoading={isLoading && count>0}
						variant="outline"
						className="hidden h-8 w-8 p-0 lg:flex"
						onClick={() => setQuery({...query ,skip : query?.skip+10})}
						disabled={count < query?.take}
					>
						<span className="sr-only">Go to last page</span>
						<ArrowRight className="h-4 w-4" />
					</Button> */}
				</div>
			</div>
		</div>
	);
}
