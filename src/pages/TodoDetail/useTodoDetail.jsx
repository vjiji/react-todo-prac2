import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useTodoDetail() {
  const { todos } = useSelector((state) => state);
  console.log(todos, "todos");
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return { todos, handleButtonClick };
}
