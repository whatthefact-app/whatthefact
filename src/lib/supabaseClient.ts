import { SUPABASE_PROJECT_ID, SUPABASE_ANON_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const SUPABASE_URL = `https://${SUPABASE_PROJECT_ID}.supabase.co`;

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY);
