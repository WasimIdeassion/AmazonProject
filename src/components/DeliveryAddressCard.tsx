import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DeliveryAddressCard = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#b6e8ef', '#c0ede8', '#cbf1e2']}>
      <View style={styles.container}>
        <Ionicons name="location-outline" size={24} color="black" />
        <View style={styles.location}>
          <Text style={styles.deliverText}>
            Deliver to Mohammed - Chennai 600023
          </Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default DeliveryAddressCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliverText: {
    fontSize: 12,
  },
});
