import { RouterProvider } from 'react-router-dom';
import { router } from './routing.js';
import { AppProvider } from './context.js';

function App() {
  // const [registered, setRegistered] = useState(true);
  return (
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>;
    </AppProvider>
  );
}

export default App;
