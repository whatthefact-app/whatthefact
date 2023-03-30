import { supabase } from '$lib/server/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { data } = await supabase.from('facts').select();

	if (!data?.length) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		facts: data
	};
}) satisfies PageServerLoad;
