import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import {resolveCreatePost} from '../api/api';
import {useNavigation} from '@react-navigation/native';
import {queryClient} from '../../App';

type FormData = {
  title: string;
  description: string;
};
export const CreatePostScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const createPost = useMutation({
    mutationKey: ['createPost'],
    mutationFn: (data: FormData) => resolveCreatePost(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      navigation.goBack();
    },
  });

  const onSubmit = (data: FormData) => createPost.mutate(data);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />
      {errors.title && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            placeholder="Description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  input: {
    borderColor: '#67afe0',
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
  },
});
