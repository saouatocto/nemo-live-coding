import { UserDto } from 'utils/types';
import { capitalize } from './string';
import { BADGE_STATUS, BadgeStatusType } from 'components/ui';

export const getFullName = (user: UserDto) => {
  const { lastName, firstName } = user;
  return [capitalize(firstName), lastName.toUpperCase()].join(' ');
};

export const resolveUserStatusColor = (user: UserDto): BadgeStatusType => {
  const { status } = user;
  switch (status) {
    case 'SUSPENDED':
      return BADGE_STATUS.WARNING;
    case 'ACTIF':
      return BADGE_STATUS.SUCCESS;
    case 'DELETED':
      return BADGE_STATUS.DANGER;
    default:
      return BADGE_STATUS.SUCCESS;
  }
};

export const resolveUserStatusLabel = (user: UserDto): string => {
  const { status } = user;
  switch (status) {
    case 'SUSPENDED':
      return 'Suspendu';
    case 'ACTIF':
      return 'Active';
    case 'DELETED':
      return 'Supprimé';
    default:
      return 'N/A';
  }
};
