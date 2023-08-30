import {useMutation} from '@tanstack/react-query';
import {resolveDeletePost} from '../api/api';

export const useDeletePost = (onSuccess: () => void) => {
  return useMutation({
    mutationKey: ['deletePost'],
    mutationFn: (id: number) => resolveDeletePost(id),
    onSuccess: () => {
      onSuccess && onSuccess();
    },
  });
};
