import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { shuffle } from '../utils/shuffle';
import type { Fact } from '../types/types';

export const load = (async ({ request, url }) => {
	const country =
		url.searchParams.get('country') || request.headers.get('x-vercel-ip-country') || 'PT';
	const { data } = await supabase.from('facts').select().eq('country', country);

	if (!data?.length) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		facts: shuffle(data).slice(0, 5) as Fact[],
		country
	};
}) satisfies PageServerLoad;
