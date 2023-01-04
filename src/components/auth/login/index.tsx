import { Button, TextField, Typography } from '@mui/material';
import { ILogin } from '../../../common/types/auth';

const LoginPage: React.FC<ILogin> = (props: ILogin): JSX.Element => {
  const { navigate, register, errors} = props

  return (
    <>
      <Typography variant="h2" textAlign='center' fontFamily='Poppins'>
        Авторизация
      </Typography>
      <Typography variant="body1" marginBottom={2} textAlign='center' fontFamily='Poppins'>
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
        {...register('email', )}
      />
      <TextField
      error={!!errors.password}
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        type='password'
        placeholder="Введите ваш Пароль"
        helperText={errors.password ? `${errors.password.message}` : ''}
        {...register('password', )}
      />
      <Button type='submit' sx={{fontFamily: 'Poppins', marginBottom: 2, marginTop: 2, width: '60%' }} variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>
        У вас нет аккаунта? <span className='incitingText' onClick={() => navigate('/register')}>Регистрация</span>
      </Typography>
    </>
  );
};

export default LoginPage;
