import { useState } from "react";
import { isNonEmptyText } from "../../../../utils/isNonEmptyText";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../../../../redux/modules/todosSlice";
import { addId } from "../../../../redux/modules/counterSlice";

export const useAddTodo = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddTodoButtonClick = () => {
    if (!(isNonEmptyText(title) && isNonEmptyText(content))) {
      window.alert("제목과 내용을 모두 작성해주세요!");
      return;
    }
    dispatch(
      addTodos({ title, content, completed: false, id: String(counter) })
    );
    dispatch(addId());
    setTitle("");
    setContent("");
  };
  return { title, content, setTitle, setContent, handleAddTodoButtonClick };
};
