import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { BlogDetail } from "./components/BlogDetail";
import Login from "./layouts/FormLogin";
import Register from "./layouts/FormRegister";

function App() {

  // const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // async function authCheck() {
  //   try {
  //     setAuthToken(localStorage.token);
  //     const response = await API.get("/auth/check");
  //     console.log("anda berhasil", response);
  //     setIsLoading(false);
  //   } catch (err) {
  //     localStorage.removeItem("token");
  //     setIsLoading(false);
  //     navigate("/FormLogin");
  //     console.log("auth error", err);
  //   }
  // }

  // useEffect(() => {
  //   authCheck();
  // }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/detail/:id" element={<BlogDetail />} />
          <Route path="/FormLogin" element={<Login />} />
          <Route path="/FormRegister" element={<Register />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
