import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

export default function ProductScreen({ route }) {
  const { product } = route.params;

  const handleAddToCart = () => {
    Alert.alert('Success', `${product.name} Telah dimasukan kedalam keranjang.`);
  };

  const handleBuyNow = () => {
    Alert.alert('Success', `Anda telah membayar ${product.name}.`);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Rp {product.price.toLocaleString('id-ID')}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={handleAddToCart} color="#4CAF50" />
        <Button title="Buy Now" onPress={handleBuyNow} color="#FF5722" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
});
