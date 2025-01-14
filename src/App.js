import Navbar from "./pages/components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/LogInPage/LogInPage";
import SignUp from "./pages/SignUpPage/SignUpPage";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/src/pages/LogInPage/LogInPage.js" element={<Login />} />
        <Route
          path="/src/pages/SignUpPage/SignUpPage.js"
          element={<SignUp />}
        />
        <Route path="/src/pages/Home/Home.js" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
