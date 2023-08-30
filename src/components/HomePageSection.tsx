import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {HomePageTextSection} from './HomePageTextSection';

interface Props {
  index: number;
}

export const HomePageSection = ({index}: Props) => {
  const isImageSection = index % 2 === 0;
  return (
    <View style={styles.sectionContainer}>
      {isImageSection ? (
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/18093210/pexels-photo-18093210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
        />
      ) : (
        <HomePageTextSection />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    minHeight: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
