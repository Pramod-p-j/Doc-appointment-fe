import MainScreen from "./views/screens/main-screen/main-screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterComponent from "./views/screens/register-screen/register-screen";
import LoginComponent from "./views/screens/login-screen/login";
import HomeScreen from "./views/screens/home-screen/home-screen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          {/* <Route element={<ProtectedRoute isAuth={isAuth} />}> */}
          <Route path="/home" element={<HomeScreen />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
