import { UserDto } from 'utils/types';
import { UserRow } from 'components/UserRow';
import { Stack } from 'components/ui';
import React from 'react';

interface UserListProps {
  users: UserDto[];
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <Stack direction={'column'} spacing={4}>
      {users.map((user) => (
        <UserRow user={user} key={user.id} />
      ))}
    </Stack>
  );
};
