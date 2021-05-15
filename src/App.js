import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {RestaurantCard} from './components';
import {mainStyles as styles} from './mainStyles';

const App = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRestData = async () => {
    setIsLoading(true);
    const {data} = await axios.get(
      'https://random-data-api.com/api/restaurant/random_restaurant',
    );
    setRestaurantData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{'<ed8en />'} design</Text>
      </View>
      <ScrollView>
        <View>
          {isLoading ? (
            <Text style={styles.loading}>Loading</Text>
          ) : (
            <RestaurantCard restaurantData={restaurantData} />
          )}
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.btn} onPress={fetchRestData}>
          <Text>New Restaurant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
