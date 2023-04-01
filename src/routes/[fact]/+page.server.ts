import { TABLE_NAME, supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { data, error: dbError } = await supabase.from(TABLE_NAME).select().eq('id', params.fact);

	if (!data?.length || dbError) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		fact: data[0]
	};
}) satisfies PageServerLoad;
