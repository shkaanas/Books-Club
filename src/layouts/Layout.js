import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { AuthProvider } from '../AuthContext.js';

export default function Layout(props) {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <main>
          <Outlet></Outlet>
        </main>
      </AuthProvider>
    </>
  )
}
