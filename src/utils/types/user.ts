export type UserStatusType = 'ACTIF' | 'SUSPENDED' | 'DELETED';

export interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  status: UserStatusType;
}
