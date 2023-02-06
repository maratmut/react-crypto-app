import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface ILogin<TFieldValues extends FieldValues = FieldValues, TContext = any> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean
}

export interface IPropsRegister<TFieldValues extends FieldValues = FieldValues, TContext = any> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean
}

export interface IAuthState {
  user: IPublicUser;
  isLogged: boolean;
  isLoading: boolean
}

interface IPublicUser {
  id: number | null;
  firstName: string;
  username: string;
  email: string;
  createdAt: string;
  updateAt: string;
  watchlist: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updateAt: string;
  user: number | null;
}

export interface ILoginData {
  email: string
  password: string
}

export interface IRegisterData {
  email: string
  password: string
  firstName: string
  username: string
}
