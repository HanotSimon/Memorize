import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://fvfpsyvduwimdwcrbvib.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_EaNS_E-n9jAxOIudD8nqpA_3GwTnCpW";
console.log(SUPABASE_URL)
console.log(SUPABASE_ANON_KEY)
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);