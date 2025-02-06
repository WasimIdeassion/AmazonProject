import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  img: string;
  text: string;
}

const CategoryCard = ({img, text}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: img}} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginRight: 20,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 12,
  },
});
