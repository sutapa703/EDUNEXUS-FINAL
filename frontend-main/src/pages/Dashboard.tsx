import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { StudentList } from '@/components/StudentList';

const Dashboard = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <StudentList />
          </main>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Dashboard;
