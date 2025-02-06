import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import DeliveryAddressCard from '../components/DeliveryAddressCard';
import CategoryCard from '../components/CategoryCard';
import {categoryData, dealData, devicesDealData} from '../data/CarouselData';
import CarouselCard from '../components/CarouselCard';
import DealCard from '../components/DealCard';
import CustomHeader from '../components/SearchHeader';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  // ✅ Use useLayoutEffect for setting navigation options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      header: CustomHeader, // ✅ Pass as a direct reference
    });
  }, [navigation]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DeliveryAddressCard />
      <ScrollView
        style={styles.categoryContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {categoryData.map(dat => (
          <CategoryCard key={dat.text} img={dat.img} text={dat.text} />
        ))}
      </ScrollView>

      <CarouselCard />

      <View>
        <Text style={styles.dealText}>Electronics devices for home office</Text>
        <View style={styles.dealItemCont}>
          {devicesDealData.map(data => (
            <DealCard key={data.text} img={data.img} text={data.text} />
          ))}
        </View>
      </View>

      <View>
        <Text style={styles.dealText}>
          {' '}
          Up to 60% off | Tools & home improvement
        </Text>
        <View style={styles.dealItemCont}>
          {dealData.map(data => (
            <DealCard key={data.text} img={data.img} text={data.text} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dealText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
    marginTop: 20,
  },
  dealItemCont: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

export default HomeScreen;
