import { FC, SyntheticEvent, useRef } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const TodoInput: FC<{ add: (content: string) => void }> = ({ add }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClick = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value) {
      add(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form>
      <TextField required inputRef={inputRef} label="What to do?" />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleClick}
      >
        ADD
      </Button>
    </form>
  );
};

export default TodoInput;
