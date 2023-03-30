import { supabase } from '$lib/server/supabaseClient';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const { data } = await supabase.from('facts').select().eq('slug', params.fact);

	if (!data?.length) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		fact: data[0]
	};
}) satisfies PageServerLoad;
