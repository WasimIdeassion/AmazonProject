import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
// ✅ Move CustomHeader OUTSIDE useEffect
const CustomHeader: React.FC = () => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={['#84dce6', '#93e0da', '#a9ead0']}>
    <View style={styles.headerContainer}>
      <View style={styles.searchContainer}>
        <View style={styles.row}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Search or ask a question"
            placeholderTextColor={'#4d4d4d'}
          />
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="camera-plus-outline"
            size={26}
            color="black"
          />
          <Ionicons name="mic-outline" size={26} color="black" />
        </View>
      </View>
      <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
    </View>
  </LinearGradient>
);

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    paddingTop: 40,
    gap: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#5a797a',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    flexGrow: 1,
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    color: 'black',
  },
});
