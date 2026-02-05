// lib/supabaseClient.ts
/**
 * Supabase Client Setup
 * 
 * This file initializes a Supabase client for use throughout the project.
 * You can import supabase in any page, component, or API route to interact with your database.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Your Supabase project URL (found in the Supabase dashboard)
const SUPABASE_URL: string = 'https://edcewzeixxkjsviokmua.supabase.co'

// Your public API key (anon key) for client-side access
// ⚠️ Never expose the service role key in frontend code
const SUPABASE_KEY: string = 'sb_publishable_VKnuLmje9N2swRefhqlgaQ_s6Hjh3bc'

// Create a typed Supabase client instance
export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)

/**
 * Usage:
 * import { supabase } from '../lib/supabaseClient'
 * 
 * Example:
 * const { data, error } = await supabase.from('users').select('*')
 */