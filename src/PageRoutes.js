import App from "./App"
import ProjectPage from "./components/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function PageRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<App />} />
                <Route path=":name" element={<ProjectPage />} />
            </Routes>
        </Router>
    )
}