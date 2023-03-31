import { supabase } from '$lib/server/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const { data } = await supabase.from('facts').select();

	console.log('event', event);
	console.log('event.getClientAddress(', event.getClientAddress());
	console.log('event.request.headers', event.request.headers);

	if (!data?.length) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		facts: data,
		location: event.request.headers.get('x-vercel-ip-country')
	};
}) satisfies PageServerLoad;

// import geoip from 'geoip-lite';

// export async function get({ request }) {
//   const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
//   const geo = geoip.lookup(ip);
//   const country = geo?.country;

//   return {
//     body: { country }
//   };
// }
