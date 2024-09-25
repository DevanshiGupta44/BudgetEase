import { Routes, Route } from 'react-router-dom';
import Auth from './pages/auth.jsx';
import FinanceTracker from './pages/financetracker.jsx';
// import PrivateRoute from './utils/PrivateRoute.jsx';
// import PageNotFound from './components/shared/PageNotFound.jsx'
import Header from './components/shared/Header.jsx'; 
import { useAuth } from './context/AuthContext.jsx';
import bgimage from '/bgimage.jpg'; // Importing the background image

function App() {   
  const auth = useAuth();

  const appStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '0',
    margin: '0'
  };

  return (
    <div style={appStyle}>
      <Header />
      <Routes>  
        <Route path="/" element={<Auth />} />  
        {auth.isUser && auth.islogin && <Route path="/financetracker" element={<FinanceTracker />} />} 
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;

