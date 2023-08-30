import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {resolveGetPosts} from '../api/api';
import React, {useCallback, useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Post} from '../types/types';
import {useDeletePost} from '../hooks/useDeletePost';

export const Posts = () => {
  const navigation = useNavigation();
  const {data, isLoading, refetch} = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () => resolveGetPosts(),
  });

  const deletePost = useDeletePost(() => refetch());

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title={'Add Post'}
          onPress={() => navigation.navigate('CreatePost')}
        />
      ),
    });
  }, []);

  const handlePress = useCallback(
    (id: number) => {
      navigation.navigate('Post', {id: id});
    },
    [navigation],
  );

  //tutaj nie opakowywałałbym return w klamry ale linter wymaga :)
  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView>
      {data?.map((item, index: number) => (
        <TouchableOpacity
          onPress={() => handlePress(item?.id)}
          style={styles.post}
          key={index}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
          <View>
            <TouchableOpacity onPress={() => deletePost.mutate(item.id)}>
              <Text style={styles.deleteText}>Usuń post</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  deleteText: {
    marginTop: 12,
    color: 'red',
  },
});
