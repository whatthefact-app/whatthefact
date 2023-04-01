import type { Database } from './supabase';

export type Fact = Database['public']['Tables']['factss']['Row'];
export type Country = 'FR' | 'PT' | 'US' | 'AU' | 'BR';
