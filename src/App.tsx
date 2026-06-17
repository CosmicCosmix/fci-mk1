
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import LandingPage from './pages/LandingPage'; // Adjust path as needed
import UserLayout from './layouts/UserLayout'; // The layout we created earlier
import UserDashboard from './pages/user/UserDashboard'; // The dashboard we created earlier

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Landing Page */}
                <Route path="/" element={<LandingPage />} />

                {/* User Dashboard Routes - Wrapped in the Layout */}
                <Route path="/Userdashboard" element={<UserLayout />}>
                    {/* The 'index' route renders UserDashboard inside the UserLayout Outlet by default */}
                    <Route index element={<UserDashboard />} />

                    {/* You can easily add more nested routes later, e.g.: */}
                    {/* <Route path="profile" element={<UserProfile />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;