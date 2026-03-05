import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { signIn } from '../services/authService';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const { user, error } = await signIn(email, password);
    if (error) return setError(error);
    setError('');
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Login</Text>
      {error ? <Text style={{ color:'red' }}>{error}</Text> : null}
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ width:'100%', marginBottom:10, borderWidth:1, padding:10 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ width:'100%', marginBottom:20, borderWidth:1, padding:10 }} />
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor:'blue', padding:15, width:'100%', alignItems:'center', borderRadius:5 }}>
        <Text style={{ color:'white' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ marginTop:15 }}>
        <Text style={{ color:'blue' }}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}