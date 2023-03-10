// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';

const AppContainer = styled.div`
${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden    
    
`}
`
function App() {
  return (
   <AppContainer>
    <HomePage/>
   </AppContainer>
  );
}

export default App;
