import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let carimg1 = require("./assets/car1.jpg");  // local image file path
  let carimg2 = require("./assets/car2.png");  // local image file path
  let carimg3 = require("./assets/car3.jpg");  // local image file path
  let carimg4 = require("./assets/car4.jpg");  // local image file path
  let carimg5 = require("./assets/car5.webp");  // local image file path
  let carimg6 = require("./assets/car6.jpeg");  // local image file path
  let carimg7 = require("./assets/car7.webp");  // local image file path


  let cars = [
    {
      image: carimg1,
      price: "RS: 500,000",
      BrandName: "Toyota",
    },
    {
      image: carimg2,
      price: "RS: 800,000",
      BrandName: "Toyota",
    },
    {
      image: carimg3,
      price: "RS: 500,000",
      BrandName: "Toyota",
    },
    {
      image: carimg4,
      price: "RS: 400,000",
      BrandName: "Toyota",
    },
    {
      image: carimg5,
      price: "RS: 50,00,000",
      BrandName: "Toyota",
    },
    {
      image: carimg6,
      price: "RS: 500,000",
      BrandName: "Toyota",
    },
    // {
    //   image: carimg7,
    //   price: "RS: 15,00,000",
    //   BrandName: "Toyota",
    // },
  ]
  return (
    <SafeAreaView style={styles.MainContainer}>
      <StatusBar style="auto" />
      <View style={styles.TopContainer}>
        <Text style={styles.LeftArrowBtn}> &lt; </Text>
        <Text style={styles.MainText}>Available Cars</Text>
      </View>
      {/* <View style={styles.CardContainer}> */}
      <View style={styles.CardContainer}>
        {cars.map((item) => {
          return (
            <View style={styles.Cards}>
              <Image source={item.image} style={styles.CarImage} />
              <Text> {item.BrandName} </Text>
              <Text> {item.price} </Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView >
  );
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#EBEAF0",
    padding: 20,
    flexWrap: 'wrap',

  },
  TopContainer: {
    flex: 0.3,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  LeftArrowBtn: {
    backgroundColor: "white",
    fontSize: 20,
    padding: 5,
    marginBottom: 10,
    borderRadius: 10,
    boxShadow: "0px 0px 3px rgba( 0,0,0,0.5)",
    borderWidth: 1,
    borderColor: "lightgray",

  },

  MainText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  CardContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    overflow: 'auto',
  },

  Cards: {
    width: 155,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#F4F4F6',
    borderRadius: 5,
    boxShadow: "0px 0px 5px rgba( 0,0,0,0.1)",
  },
  CarImage: {
    height: 100,
    width: '90%',
    objectFit: 'contain',

  },
});
