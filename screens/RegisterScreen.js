import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { signUp } from '../services/authService';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    const { user, error } = await signUp(email, password);
    if (error) return setError(error);
    setError('');
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Register</Text>
      {error ? <Text style={{ color:'red' }}>{error}</Text> : null}
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ width:'100%', marginBottom:10, borderWidth:1, padding:10 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ width:'100%', marginBottom:20, borderWidth:1, padding:10 }} />
      <TouchableOpacity onPress={handleRegister} style={{ backgroundColor:'green', padding:15, width:'100%', alignItems:'center', borderRadius:5 }}>
        <Text style={{ color:'white' }}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop:15 }}>
        <Text style={{ color:'blue' }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}