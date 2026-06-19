import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserEnrollment from "./pages/admin/UserEnrollment";
import AddUser from "./pages/admin/AddUser";

import UserLayout from "./layouts/UserLayout";
import UserDashboard from "./pages/user/UserDashboard";
import UserCourse from "./pages/user/UserCourse";
import UserLesson from "./pages/user/UserLesson";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Landing Page */}
                <Route path="/" element={<LandingPage />} />
                <Route element={<AdminLayout/>}>
                    <Route path="/admindashboard" element={<AdminDashboard/>}/>
                    <Route path="/userenrollment" element={<UserEnrollment/>}/>
                    <Route path="/adduser" element={<AddUser/>}/>
                </Route>
                {/* User Dashboard Routes - Wrapped in the Layout */}
                <Route path="/userdashboard" element={<UserLayout />}>
                    {/* The 'index' route renders UserDashboard inside the UserLayout Outlet by default */}
                    <Route index element={<UserDashboard />} />
                    <Route path="course" element={<UserCourse />}/> {/* -- path is not URL path. Isme jo naam hai, that is "course", what is defined only once in UserDashboard.tsx as <Link to="/UserDashboard/course" */}
                    <Route path="course/lesson" element={<UserLesson />}/>
                    {/* <Route path="profile" element={<UserProfile />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;