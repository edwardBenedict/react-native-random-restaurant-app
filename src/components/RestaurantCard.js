import React from 'react';
import {View, Text, Image} from 'react-native';
import {restaurantCardStyle as styles} from './styles';

const RestaurantCard = ({restaurantData}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.biggerText}>Name: {restaurantData.name}</Text>
        <Text style={styles.biggerText}>Type: {restaurantData.type}</Text>
      </View>
      <Text style={styles.smallerText}>Review: {restaurantData.review}</Text>
      <View style={styles.imgContainer}>
        <Image source={{uri: restaurantData.logo}} style={styles.img} />
      </View>
      <Text style={styles.smallerText}>
        Phone Number: {restaurantData.phone_number}
      </Text>
      <Text style={styles.smallerText}>Address: {restaurantData.address}</Text>
    </View>
  );
};

export {RestaurantCard};
