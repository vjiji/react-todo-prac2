import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useTodoDetail() {
  const { todos } = useSelector((state) => state);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return { todos, handleButtonClick };
}
