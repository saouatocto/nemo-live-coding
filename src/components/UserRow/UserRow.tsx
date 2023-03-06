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
import {getFullName, resolveUserStatusColor, resolveUserStatusLabel} from 'utils/helpers';

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
        <Badge
          label={resolveUserStatusLabel(user)}
          variant={resolveUserStatusColor(user)}
        />
      </Stack>
    </Card>
  );
};
