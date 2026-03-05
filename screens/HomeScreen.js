import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { signOut } from '../services/authService';

export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:24 }}>Welcome!</Text>
      <TouchableOpacity onPress={handleLogout} style={{ marginTop:20, padding:15, backgroundColor:'red', borderRadius:5 }}>
        <Text style={{ color:'white' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}