import { RouterProvider } from 'react-router-dom';
import { router } from './routing.js';
import { useState } from 'react';


function App() {
// const [registered, setRegistered] = useState(true);

  return <RouterProvider router={router} />;
}

export default App;
