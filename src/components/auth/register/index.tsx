import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { navigate, register, errors } = props;

  return (
    <>
      <Typography variant="h2" textAlign="center" fontFamily="Poppins">
        Регистрация
      </Typography>
      <Typography variant="body1" marginBottom={2} textAlign="center" fontFamily="Poppins">
        Введите данные для регистрации
      </Typography>
      <TextField
        error={!!errors.name}
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        helperText={errors.name ? `${errors.name.message}` : ''}
        {...register('name')}
      />
      <TextField
        error={!!errors.username}
        fullWidth={true}
        margin="normal"
        label="username"
        variant="outlined"
        placeholder="Введите ваш username"
        helperText={errors.username ? `${errors.username.message}` : ''}
        {...register('username')}
      />
      <TextField
        error={!!errors.email}
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш Email"
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email')}
      />
      <TextField
        error={!!errors.password}
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        type="password"
        placeholder="Введите ваш Пароль"
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password')}
      />
      <TextField
        error={!!errors.confirmPassword}
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        type="password"
        placeholder="Повторите пароль"
        helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
        {...register('confirmPassword')}
      />
      <Button
        type="submit"
        sx={{ fontFamily: 'Poppins', marginBottom: 2, marginTop: 2, width: '60%' }}
        variant="contained">
        Регистрация
      </Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        Уже есть аккаунт?{' '}
        <span className="incitingText" onClick={() => navigate('/login')}>
          Войти
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
