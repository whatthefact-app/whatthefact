import { writable } from 'svelte/store';
import type { Fact } from '../types/facts';

export const facts = writable<Fact[]>([]);
