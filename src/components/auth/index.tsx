import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { LoginSchema } from '../../utils/yup';
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss';
import {yupResolver} from '@hookform/resolvers/yup';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');

  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(LoginSchema)
  });

  const handleSubmitForm = async (data: any) => {
    if (location.pathname === '/login') {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };

        const user = await instance.post('auth/login', userData);
        dispatch(login(user.data));

        navigate('/');
      } catch (err) {
        return err;
      }
    } else {
      if (password === repeatPassword) {
        try {
          const userData = {
            username,
            firstName,
            email,
            password,
          };

          const newUser = await instance.post('auth/register', userData);
          dispatch(login(newUser.data));
          navigate('/');
        } catch (err) {
          return err;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };
  return (
    <div className="root">
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          max-width={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}>
          {location.pathname === '/login' ? (
            <LoginPage 
            navigate={navigate} 
            register={register}
            errors={errors}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              setEmail={setEmail}
              setPassword={setPassword}
              setRepeatPassword={setRepeatPassword}
              setFirstName={setFirstName}
              setUsername={setUsername}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );

  /* */
};

export default AuthRootComponent;
