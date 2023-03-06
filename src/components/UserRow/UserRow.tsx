import { UserDto } from 'utils/types';
import {
  Avatar,
  Box,
  Card,
  Text,
  Stack,
  Badge,
  BadgeStatusType,
  BADGE_STATUS,
} from 'components/ui';
import { getFullName } from 'utils/helpers';

const resolveUserStatusColor = (user: UserDto): BadgeStatusType => {
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

interface UserRowProps {
  user: UserDto;
}
export const UserRow = ({ user }: UserRowProps) => {
  return (
    <Card>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Avatar fullName={getFullName(user)} scale={100} />

        <Stack direction={'column'} spacing={2}>
          <Text>{getFullName(user)}</Text>
          <Text>{user.email}</Text>
        </Stack>

        <Stack direction={'column'} spacing={2}>
          <Text>Date de création</Text>
          <Text>{user.createdAt}</Text>
        </Stack>

        <Badge label={'ACTIF'} variant={resolveUserStatusColor(user)} />
      </Stack>
    </Card>
  );
};
