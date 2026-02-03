import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1"><Outlet /></main>
    <Footer />
    <Toaster />
  </div>
);

const rootRoute = createRootRoute({ component: Layout });
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const menuRoute = createRoute({ getParentRoute: () => rootRoute, path: '/menu', component: Menu });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact });

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, menuRoute, contactRoute]);
const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
