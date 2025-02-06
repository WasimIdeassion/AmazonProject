import {
  Text,
  View,
  // StyleSheet
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import LinearGradient from 'react-native-linear-gradient';
import CustomHeader from '../components/SearchHeader';

type MenuScreenProps = {
  navigation: StackNavigationProp<any>;
};

const MenuScreen: React.FC<MenuScreenProps> = ({navigation}) => {
  // ✅ Use useLayoutEffect for setting navigation options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      header: CustomHeader, // ✅ Pass as a direct reference
    });
  }, [navigation]);

  return (
    <View>
      <Text>MenuScreen</Text>
    </View>
  );
};

// const styles = StyleSheet.create({});

export default MenuScreen;
