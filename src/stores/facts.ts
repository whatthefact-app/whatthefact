import { writable } from 'svelte/store';
import type { Fact } from '../types/fact';

export const facts = writable<Fact[]>([]);
