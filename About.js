import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
export default function About({ route, navigation }) {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Detail Kontak" />
        <Card.Content>
          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.value}>{friend.nim}</Text>
          <Text style={styles.label}>No.HP:</Text>
          <Text style={styles.value}>{friend.hp}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{friend.email}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => navigation.navigate('Home')}>
            Home
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
    justifyContent: 'center',
  },
  card: {elevation: 3, // Untuk Android
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
    }),
  },label: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },value: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
});
