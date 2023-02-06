import { TextField, Typography } from '@mui/material';
import { ILogin } from '../../../common/types/auth';
import AppLoadingButton from '../../loading-button';
import { useStyles } from './styles';

const LoginPage: React.FC<ILogin> = (props: ILogin): JSX.Element => {
  const { navigate, register, errors, loading } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2" textAlign="center" fontSize={32}>
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={2} textAlign="center">
        Введите ваш логин и пароль
      </Typography>
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
      <AppLoadingButton
        loading={loading}
        type="submit"
        sx={{ marginBottom: 2, marginTop: 2, width: '60%' }}
        variant="contained">
        Войти
      </AppLoadingButton>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?{' '}
        <span className={classes.incitingText} onClick={() => navigate('/register')}>
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
