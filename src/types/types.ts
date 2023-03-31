import type { Database } from './supabase';

export type Fact = Database['public']['Tables']['facts']['Row'];
export type Country = 'FR' | 'PT' | 'USA';