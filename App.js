import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { supabase } from './supabaseClient';

export default function App() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Memorize</Text>
    </View>
  );
}