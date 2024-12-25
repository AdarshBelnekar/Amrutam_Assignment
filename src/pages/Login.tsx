import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}




const Login = () => {
  const [currState, setCurrState] = useState<"Login" | "Sign Up">("Login");
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login/signup functionality
    console.log(data);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ${
        showLogin ? "block" : "hidden"
      }`}
    >
      <form onSubmit={onLogin} className="bg-green-100 rounded-lg p-8 w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{currState}</h2>
          
          <button onClick={() => setShowLogin(false)}>
                <i className="fa-solid fa-xmark px-2"></i>
              </button>
        </div>

        <div className="space-y-4">
          {currState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Type email here"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-green-800 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="flex items-center justify-center mt-4">
          <input type="checkbox" required className="mr-2" />
          <p className="text-sm text-gray-600">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        <div className="text-center mt-4 text-sm">
          {currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => setCurrState("Sign Up")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setCurrState("Login")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
