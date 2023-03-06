import React from 'react';
import { UserRow } from 'components/UserRow';
import { UserDto } from 'utils/types';
import { Container, Stack } from 'components/ui';
import { UserList } from 'components/UserList';

const USERS_MOCK: UserDto[] = [
  {
    id: '60a9e1z53e',
    firstName: 'saber',
    lastName: 'ouarezzamen',
    createdAt: '02/02/2022 13:14',
    status: 'SUSPENDED',
    email: 'saou@octo.ma',
  },
  {
    id: '00a9e1z53s',
    firstName: 'Moise',
    lastName: 'GUINHOUYA',
    createdAt: '02/02/2022 13:14',
    status: 'ACTIF',
    email: 'saou@octo.ma',
  },
  {
    id: '40a9e1z53k',
    firstName: 'Anass',
    lastName: 'AZIZI',
    createdAt: '02/02/2022 13:14',
    status: 'SUSPENDED',
    email: 'saou@octo.ma',
  },
  {
    id: '10a9e1z53k',
    firstName: 'Wafiya',
    lastName: 'RAISSOUNI',
    createdAt: '02/02/2022 13:14',
    status: 'ACTIF',
    email: 'saou@octo.ma',
  },
];

function App() {
  return (
    <div className="App">
      <Container>
        <UserList users={USERS_MOCK} />
      </Container>
    </div>
  );
}

export default App;
