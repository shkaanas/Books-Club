import { RouterProvider } from 'react-router-dom';
import { router } from './routing.js';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
