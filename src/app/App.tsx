import { BrowserRouter } from 'react-router-dom';
import TodoProvider from '../todos/TodoContext';
import Sidebar from './Sidebar';
import UserProvider from '../users/UserContext';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <section className="flex flex-1 overflow-y-auto">
            <UserProvider>
              <TodoProvider>
                <AppRoutes />
              </TodoProvider>
            </UserProvider>
          </section>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
