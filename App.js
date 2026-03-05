import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator';
import { supabase } from './supabaseClient';

export default function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true); // Pour le SplashScreen

  useEffect(() => {
    // Récupération de la session Supabase
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false); // On cache le SplashScreen après récupération
    });

    // Écoute les changements de session
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <AuthNavigator session={session} />
    </NavigationContainer>
  );
}

// SplashScreen simple
function SplashScreen() {
  return (
    <View style={styles.splashContainer}>
      <Image
        source={require('./assets/splash-icon.png')} // ton logo ici
        style={{ width: 120, height: 120, marginBottom: 20 }}
      />
      <ActivityIndicator size="large" color="#4B7BEC" />
      <Text style={{ marginTop: 10, fontSize: 16 }}>Chargement...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});