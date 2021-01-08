import { FC, SyntheticEvent } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import { Todo } from "models/todo";

type Props = {
  todoList: Todo[];
  done: (id: number) => void;
};

const TodoList: FC<Props> = ({ todoList = [], done = () => undefined }) => {
  const genHandleClick = (id: number) => {
    const handleClick = (e: SyntheticEvent) => {
      e.preventDefault();
      done(id);
    };

    return handleClick;
  };

  return (
    <List component="nav">
      {todoList.map((todo) => (
        <ListItem>
          <ListItemText primary={todo.content} />
          <Button variant="contained" onClick={genHandleClick(todo.id)}>
            DONE
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
export default TodoList;
