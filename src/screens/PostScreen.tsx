import React from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import {resolveGetPost} from '../api/api';
import {useQuery} from '@tanstack/react-query';
import {Post} from '../types/types';
import {useNavigation} from '@react-navigation/native';
import {useDeletePost} from '../hooks/useDeletePost';

export const PostScreen = ({route}) => {
  const navigation = useNavigation();
  const {id} = route.params;

  const {data, isLoading, isSuccess} = useQuery<Post>({
    queryKey: ['post', id],
    queryFn: () => resolveGetPost(id),
    enabled: !!id,
  });

  const deletePost = useDeletePost(() => navigation.goBack());

  if (!id) {
    return null;
  }

  if (isLoading && !isSuccess) {
    return <ActivityIndicator />;
  }

  // tutaj typescript nie chce mnie przepuścić bez tego warunku
  if (!data) {
    return null;
  }

  return (
    <View style={styles.post}>
      <Text style={styles.title}>{data.title}</Text>
      <Text>{data.description}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => deletePost.mutate(id)}
          title={'Usuń post'}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
