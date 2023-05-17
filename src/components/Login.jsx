import { useDispatch } from "react-redux";
import { login } from "../features/User";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Pedro ", age: 20, email: "pak@o" }));
        }}>
        Login
      </button>
    </div>
  );
};

export default Login;
