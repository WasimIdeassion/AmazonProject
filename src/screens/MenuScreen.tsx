import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      header: () => (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#84dce6', '#93e0da', '#a9ead0']}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 12,
              paddingTop: 40,
              gap: 20,
            }}>
            <View
              style={{
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
                boxShadow: '0 0 10 rgba(0, 0, 0, 0.6)',
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Ionicons name="search" size={24} color="black" />
                <TextInput
                  style={{color: 'black'}}
                  placeholder="Search or ask a question"
                  onChangeText={text => console.log(text)}
                  placeholderTextColor={'#4d4d4d'}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <MaterialCommunityIcons
                  name="camera-plus-outline"
                  size={26}
                  color="black"
                />
                <Ionicons name="mic-outline" size={26} color="black" />
              </View>
            </View>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color="black"
            />
          </View>
        </LinearGradient>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>MenuScreen</Text>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
