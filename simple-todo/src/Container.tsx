import { FC, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { Todo } from "models/todo";
import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";

const MyContainer: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const done = (id: number) => {
    const newTodoList = todoList
      .filter((todo) => todo.id !== id)
      .map((todo, i) => ({ ...todo, id: i }));
    setTodoList(newTodoList);
  };
  const add = (content: string): void => {
    const newTodoList = [...todoList, { id: todoList.length, content }];
    setTodoList(newTodoList);
  };

  return (
    <Container maxWidth="sm">
      <Typography color="textPrimary" variant="h3">
        Simple Todo
      </Typography>
      <br />
      <TodoInput add={add} />
      <TodoList todoList={todoList} done={done} />
    </Container>
  );
};

export default MyContainer;
