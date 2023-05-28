import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const {
  width,
  height
} = Dimensions.get('window');

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex === 2) {// navigate to next screen
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex === 0) {// navigate to previous screen
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const renderCarouselItem = index => {
    let imageSource = '';
    let text = '';

    switch (index) {
      case 0:
        imageSource = 'https://tinyurl.com/42evm3m3';
        text = 'Welcome to our app!';
        break;

      case 1:
        imageSource = 'https://tinyurl.com/42evm3m3';
        text = 'Discover amazing features!';
        break;

      case 2:
        imageSource = 'https://tinyurl.com/42evm3m3';
        text = 'Get started now!';
        break;

      default:
        break;
    }

    return <View style={styles.carouselItemContainer}>
        <Image source={{
        uri: imageSource
      }} style={styles.carouselItemImage} />
        <Text style={styles.carouselItemText}>{text}</Text>
      </View>;
  };

  return <View style={styles.container}>
      <View style={styles.carouselContainer}>
        {renderCarouselItem(activeIndex)}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrevious}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselItemContainer: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carouselItemImage: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  carouselItemText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default OnboardingScreen;