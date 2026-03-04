import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from './supabaseClient';

export default function App() {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image) return;

    try {
      const response = await fetch(image);
      const arrayBuffer = await response.arrayBuffer();

      const fileName = `image_${Date.now()}.jpg`;

      const { error } = await supabase.storage
        .from('test')
        .upload(fileName, arrayBuffer, {
          contentType: 'image/jpeg',
        });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage('Upload réussi ✅');
      }
    } catch (err) {
      setMessage('Erreur : ' + err.message);
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Button title="Choisir une image" onPress={pickImage} />

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginVertical: 20 }}
        />
      )}

      <Button title="Uploader vers Supabase" onPress={uploadImage} />

      {message !== '' && (
        <Text style={{ marginTop: 20 }}>{message}</Text>
      )}
    </View>
  );
}