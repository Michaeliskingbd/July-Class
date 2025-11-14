import axios from "axios";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Spinner from "../utils/Spinner";
import { useUser } from "../context/UserContext";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  // const { setUser } = useUser();

  const { setUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      if (response.status === 200) {
        navigate("/");
        setErrorMessage(false);

        console.log(response);
        setUser(response.data.firstName);
        setLoading(false);
      }
    } catch (err) {
      console.error("Error", err);
      setErrorMessage(err.response.data);
      setLoading(false);
    }
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center bg-gradient-to-tl from-blue-300 via-white to-red-300">
      <div className=" w-[400px]  p-6 border-[1px] bg-white  border-blue-500 rounded-2xl shadow-xl ">
        <h1 className="text-3xl mb-5 font-bold text-gray-500 ">Sign up</h1>
        <p className="mb-2 text-xl font-bold">Welcome</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="w-full  h-[40px] border-[1px] rounded-lg border-blue-500">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-full indent-4 bg-transparent outline-none"
              type="name"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="w-full  relative  h-[40px] border-[1px] rounded-lg border-blue-500">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full indent-4 bg-transparent outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
            />
            {showPassword ? (
              <IoMdEyeOff
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-xl right-3 top-3"
              />
            ) : (
              <IoMdEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute text-xl right-3 top-3"
              />
            )}
          </div>

          {errorMessage && (
            <p className="text-red-500 font-semibold italic">{errorMessage}</p>
          )}

          <button className="flex items-center justify-center text-center w-full bg-blue-500 py-2 text-white rounded-lg ">
            {loading ? <Spinner /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AuthPage;
//STEPS FOR FORM HANDLING
//1. DEFINE USESTATE
//2. GIVE INPUT VALUE
//3. GIVE INPUT ONCHANGE

//CRUD
// C-CREATE
// R-READ
// U-UPDATE
// D-DELETE

//https://fakestoreapi.com/auth/login
