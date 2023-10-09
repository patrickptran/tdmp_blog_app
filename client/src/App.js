import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Post from "./components/Post";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* <Route path={"/register"} element={<div>register page</div>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
