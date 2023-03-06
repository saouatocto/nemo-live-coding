import React from 'react';
import { UserRow } from 'components/UserRow';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Heading1,
  Heading2,
  Skeleton,
  TextField,
  Text,
  Dialog,
  DialogTrigger,
  DialogContent,
} from 'components/ui';

function App() {
  return (
    <div className="App">
      <UserRow />
      <Button>Click me</Button>
      <Avatar fullName={'SAber Ouarezzamen'} />
      <Badge label={'success'} variant={'success'} />
      <Badge label={'danger'} variant={'danger'} />
      <Badge label={'warning'} variant={'warning'} />
      <Card>
        <Skeleton width={100} height={100} />
        <Skeleton width={100} height={100} rounded />
        <Skeleton width={200} height={8} rounded />
      </Card>
      <Box>This is a box</Box>
      <Heading1>Titre 1</Heading1>
      <Heading2>Titre 2</Heading2>
      <TextField label={'Firstname'} />
      <Text>This is a text</Text>

      <Dialog>
        <DialogTrigger>Click me</DialogTrigger>
        <DialogContent>Hello</DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
