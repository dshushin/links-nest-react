import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavBar />
        <Container maxWidth="sm">
          <SignUp />
          <SignIn />
        </Container>
        <ReactQueryDevtools initialIsOpen />
      </div>
    </QueryClientProvider>
  );
}

export default App;
