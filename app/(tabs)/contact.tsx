import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const contactsData = [
  { id: '1', name: 'John Doe', phone: '123-456-7890' },
  { id: '2', name: 'Jane Smith', phone: '098-765-4321' },
  { id: '3', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '4', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '5', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '6', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '7', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '8', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '9', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '10', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '11', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '12', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '13', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '14', name: 'Alice Johnson', phone: '555-555-5555' },
  { id: '15', name: 'Alice Johnson', phone: '555-555-5555' },
];

const ContactsScreen = () => {
  const handleContactPress = (contact) => {
    console.log(`Selected contact: ${contact.name}`);
    // Here, you could navigate to a detail view or display more information
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem} onPress={() => handleContactPress(item)}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes Contacts</Text>
      <FlatList
        data={contactsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
  },
  contactPhone: {
    fontSize: 16,
    color: '#555',
  },
});

export default ContactsScreen;
