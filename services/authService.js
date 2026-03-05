import { supabase } from '../supabaseClient';

export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return { user: data.user };
  } catch (error) {
    return { error: error.message };
  }
};

export const signUp = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return { user: data.user };
  } catch (error) {
    return { error: error.message };
  }
};

export const signOut = async () => {
  await supabase.auth.signOut();
};