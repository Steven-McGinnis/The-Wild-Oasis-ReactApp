import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginService } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginService({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/dashboard', { replace: true });
    },

    onError: (err) => {
      console.log('Error', err);
      toast.error('Provided email or password is incorrect');
    },
  });
  return { login, isPending };
}
