import { writable } from 'svelte/store';
import type { Fact } from '../types/types';

export const facts = writable<Fact[]>([]);
