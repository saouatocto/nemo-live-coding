import { UserDto } from 'utils/types';
import { capitalize } from './string';

export const getFullName = (user: UserDto) => {
  const { lastName, firstName } = user;
  return [capitalize(firstName), lastName.toUpperCase()].join(' ');
};
