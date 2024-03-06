import { combine } from 'zustand/middleware';

import { create } from 'zustand';
import { fetcher } from '../client';
import { zustandMiddleware } from '@/lib/zustand';
export const useSession = zustandMiddleware(
	combine({ sessionId: null } as { sessionId: string | null }, (set, get) => ({
		updateSessionId: (sessionId: string | null) => {
			const state = get();
			state.sessionId = sessionId;
			set({ ...state });
		},
	})),
	'credential'
);

interface User {
	user: null | any;
}
export const useUser = zustandMiddleware(
	combine({ user: null } as User, (set, get) => ({
		updateUser: async (user: any) => {
			const state = get();
			state.user = user;
			set({ ...state });
		},

		logoutUser: () => {
			const sessionId = useSession.getState().sessionId;
			if (!sessionId) return;
			const client = fetcher.path('/api/auth/sign-out').method('post').create();
			client({});
			set({ user: null });
			useSession.setState({ sessionId: null });
		},
	})),
	'user'
);

export const updateUserApi = fetcher
	.path('/api/user/update')
	.method('put')
	.create();
