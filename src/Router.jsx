import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoteApp from "./pages/note_app"
// import NoteApp from "./src/NoteApp"
import Layout from "./components/layout";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route
                    exact path="/"
                    element={
                        <Layout>
                            <NoteApp />
                        </Layout>
                    } />
            </Routes>
        </Router>
    );
}

export default AppRouter;

