import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppErrors } from '../../common/errors';
import { login } from '../../store/slice/auth';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { LoginSchema, RegisterSchema } from '../../utils/yup';
import LoginPage from './login';
import RegisterPage from './register';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStyles } from './styles';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(location.pathname === '/login' ? LoginSchema : RegisterSchema),
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
      if (data.password === data.confirmPassword) {
        try {
          const userData = {
            username: data.username,
            firstName: data.name,
            email: data.email,
            password: data.password,
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
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          max-width={640}
          margin="auto"
          padding={5}
          borderRadius={5}
          boxShadow={'-3px -2px 20px 1px #202020'}>
          {location.pathname === '/login' ? (
            <LoginPage navigate={navigate} register={register} errors={errors} />
          ) : location.pathname === '/register' ? (
            <RegisterPage navigate={navigate} register={register} errors={errors} />
          ) : null}
        </Box>
      </form>
    </div>
  );

  /* */
};

export default AuthRootComponent;
