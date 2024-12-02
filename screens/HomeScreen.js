import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: '1', name: 'MSI Slim Desktop PC', price: 5000000, image: require('../assets/images/product1.jpg') },
  { id: '2', name: 'ASUS TUF RX 7600 XT Graphics Card', price: 6500000, image: require('../assets/images/product2.jpg') },
  { id: '3', name: 'MSI B650M Gaming Plus Motherboard', price: 3500000, image: require('../assets/images/product3.jpg') },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Product', { product: item })}>
            <ProductCard product={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
});
