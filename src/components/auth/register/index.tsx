import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';
import { useStyles } from './style';
import AppLoadingButton from '../../loading-button';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" textAlign="center">
        Регистрация
      </Typography>
      <Typography variant="body1" marginBottom={2} textAlign="center" >
        Введите данные для регистрации
      </Typography>
      <Box marginBottom={2}>
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
      </Box>
      <AppLoadingButton loading={loading} type="submit" variant="contained">
        Регистрация
      </AppLoadingButton>
      <Box margin='20px 0'>
        <Typography variant="body1">
          Уже есть аккаунт?{' '}
          <span className={classes.incitingText} onClick={() => navigate('/login')}>
            Войти
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default RegisterPage;
