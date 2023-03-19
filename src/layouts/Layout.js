import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AuthProvider } from '../AuthContext.js';

export default function Layout(props) {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <main>
          <Outlet></Outlet>
        </main>
        <Footer />
      </AuthProvider>
    </>
  )
}
