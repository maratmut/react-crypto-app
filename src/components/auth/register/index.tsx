import React from 'react'
import { Button, TextField, Typography } from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setEmail, setPassword, setRepeatPassword, setFirstName, setUsername, navigate} = props
  
    return (
    <>
      <Typography variant="h2" textAlign='center' fontFamily='Poppins'>
        Регистрация
      </Typography>
      <Typography variant="body1" marginBottom={2} textAlign='center' fontFamily='Poppins'>
        Введите данные для регистрации
      </Typography>
      <TextField
        fullWidth={true}
        margin="normal"
        label="Имя"
        variant="outlined"
        placeholder="Введите ваше имя"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="username"
        variant="outlined"
        placeholder="Введите ваш username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Email"
        variant="outlined"
        placeholder="Введите ваш Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        type='password'
        placeholder="Введите ваш Пароль"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        fullWidth={true}
        margin="normal"
        label="Password"
        variant="outlined"
        type='password'
        placeholder="Повторите пароль"
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <Button type='submit' sx={{fontFamily: 'Poppins', marginBottom: 2, marginTop: 2, width: '60%' }} variant="contained">Регистрация</Button>
      <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>
        Уже есть аккаунт? <span className='incitingText' onClick={() => navigate('/login')}>Войти</span>
      </Typography>
    </>
  )
}

export default RegisterPage