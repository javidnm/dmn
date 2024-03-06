import { combine } from 'zustand/middleware';

import { create } from 'zustand';
import { fetcher } from '../client';
import { zustandMiddleware } from '@/lib/zustand';


interface Site {
	site: null | any;
}
export const useSite = zustandMiddleware(
	combine({ site: null } as Site, (set, get) => ({
	// 	fetchSite: async (query) => {
	// 		const client = fetcher.path('/api/site').method('get').create();
	// 		const response = await client(query);
	// 		const user = response.data as any;
	// 		const state = get()
	// 		state.site = user
	// 		set({ ...state });
	// },

		updateSite: async (site: any) => {
			const state = get();
			state.site = site;
			set({ ...state });
		},
	})),
	'site'
);

export const updateUserApi = fetcher
	.path('/api/user/update')
	.method('put')
	.create();
