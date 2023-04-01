import { TABLE_NAME, supabase } from '$lib/supabaseClient';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params, url }) => {
	const { data } = await supabase.from(TABLE_NAME).select().eq('id', params.fact);

	if (!data?.length) {
		throw error(404, {
			message: 'Not found'
		});
	}

	const query = url.searchParams.get('c');

	return {
		fact: data[0],
		query
	};
}) satisfies PageServerLoad;
