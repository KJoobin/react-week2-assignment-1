import { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = (increment) => {
    setState({ ...state, count: count + increment });
  };

  return <Page count={count} onClick={handleClick} />;
}
