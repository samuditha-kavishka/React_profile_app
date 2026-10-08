import React, { useState } from 'react'; 
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function App() {
 
  const [points, setPoints] = useState(0);

 
  const handleAddPoint = () => {
    setPoints(points + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
     
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

     
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('./assets/icon2.jpeg')} 
            style={styles.profileImage}
          />
          
          <View style={styles.tickBadge}>
            <MaterialIcons name="check-circle" size={28} color="#00FF00" style={styles.tickIcon} />
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      
      <View style={styles.detailsContainer}>
        <View style={styles.detailBlock}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Samuditha Kavishka</Text>
        </View>

        <View style={styles.detailBlock}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.row}>
            <MaterialIcons name="email" size={18} color="black" />
            <Text style={styles.valueWithIcon}>wskbweerakoon@students.nsbm.ac.lk</Text>
          </View>
        </View>

        <View style={styles.detailBlock}>
          <Text style={styles.label}>Points</Text>
          <View style={styles.row}>
            <FontAwesome name="star" size={18} color="black" />
           
            <Text style={styles.valueWithIcon}>{points}</Text>
          </View>
        </View>
      </View>

     
      <TouchableOpacity style={styles.fab} onPress={handleAddPoint}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    backgroundColor: '#000000',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
    padding: 5,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#FFD1DC',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  tickBadge: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 14,
  },
  tickIcon: {
    backgroundColor: 'transparent',
  },
  divider: {
    height: 1,
    backgroundColor: '#000000',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  detailBlock: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  value: {
    fontSize: 15,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueWithIcon: {
    fontSize: 15,
    color: '#333',
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    backgroundColor: '#000000',
    borderRadius: 28,
    elevation: 8, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});