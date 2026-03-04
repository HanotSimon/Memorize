import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fvfpsyvduwimdwcrbvib.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_EaNS_E-n9jAxOIudD8nqpA_3GwTnCpW';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);