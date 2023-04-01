import type { Country } from '../types/types';

export const countries: Record<Country, string> = {
	FR: 'France',
	PT: 'Portugal',
	US: 'US',
	AU: 'Australia',
	BR: 'Brazil'
};

export const MAX_FACTS_PER_ROUND = 5;
export const ROUNDS = 3;
