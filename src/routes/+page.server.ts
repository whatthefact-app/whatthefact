import { TABLE_NAME, supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { shuffle } from '../utils/shuffle';
import type { Fact } from '../types/types';
import { MAX_FACTS_PER_ROUND, ROUNDS } from '../constants/constants';

export const load = (async ({ request, url }) => {
	const country =
		url.searchParams.get('country') || request.headers.get('x-vercel-ip-country') || 'FR';

	const { data, error: dbError } = await supabase.from(TABLE_NAME).select().eq('country', country);

	if (!data?.length || dbError) {
		throw error(404, {
			message: 'Not found'
		});
	}

	const suffledData: Fact[] = shuffle(data).slice(0, MAX_FACTS_PER_ROUND * ROUNDS);

	return {
		facts: suffledData,
		country
	};
}) satisfies PageServerLoad;
