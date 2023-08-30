import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

export const HomePageTextSection = () => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('Posts');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>
        Lorem ipsum dolor sit amet
      </Text>
      <Text style={[styles.subtitle, styles.text]}>
        Nam vitae posuere tellus, vel auctor turpis
      </Text>
      <Text style={[styles.text]}>
        Integer vel mauris ut turpis scelerisque fringilla. Aliquam erat
        volutpat. Vivamus in velit viverra, auctor felis vitae, molestie lorem.
        Nunc vitae erat maximus, luctus purus sit amet, aliquet ante. Nam porta,
        sem sed eleifend bibendum, quam elit aliquam lectus, id blandit orci
        diam non dui. In vestibulum vestibulum tortor eget sollicitudin. Nunc
        eleifend scelerisque est ac gravida. Etiam nec risus convallis,
        vestibulum mi non, maximus justo. Suspendisse et ultrices magna.
      </Text>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>ZOBACZ WIĘCEJ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    marginVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#67afe0',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    textAlign: 'center',
  },
  buttonText: {
    color: '#67afe0',
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 24,
    padding: 12,
    borderWidth: 2,
    borderColor: '#67afe0',
    borderRadius: 2,
  },
});
