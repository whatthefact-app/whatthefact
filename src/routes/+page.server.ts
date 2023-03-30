import { supabase } from '$lib/server/supabaseClient';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { data } = await supabase.from('facts').select();
	return {
		facts: data ?? []
	};
}) satisfies PageServerLoad;
