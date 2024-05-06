import { createClient } from '@supabase/supabase-js';
import { config } from "dotenv";
config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(
    // process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
)

export const supabaseAdmin = createClient(
    // process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY!,
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
)