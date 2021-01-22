import React from 'react';
import { Button } from '../../components';

function Home() {
  return (
    <>
      <Button handleClick={() => alert('Hello')}>Click Me</Button>
    </>
  );
}

export default Home;
