import React from 'react';
import {ScrollView} from 'react-native';
import {HomePageSection} from '../components/HomePageSection';

export const Home = () => {
  const sections = new Array(4).fill('');

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{flex: 1}}>
      {sections.map((_, index) => (
        <HomePageSection index={index} key={index} />
      ))}
    </ScrollView>
  );
};
