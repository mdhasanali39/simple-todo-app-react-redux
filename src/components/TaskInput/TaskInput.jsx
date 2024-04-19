import { Box, TextField, Button } from "@mui/material";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../features/todos/todosSlice";
import { useRef } from "react";

const TaskInput = () => {
  const dispatch = useDispatch()
  const inputRef = useRef()

  // func for generate unique id for each task
  const generateUniqueId = () => {
    return uuidv4();
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const taskName = e.target["task-input-field"].value;
    const task = {
      id: generateUniqueId(),
      taskName,
      status: "pending",
    };
    if (taskName.length >= 3) {
      dispatch(addTodo(task))
      e.target.reset()
      toast.success("Your task added successfully");
    } else {
      return toast.error("Your task should minimum 3 characters");
    }
  };

  return (
    <Box component="div" display="flex" justifyContent="center" p="16px">
      <Box component="form" onSubmit={handleAddTask}>
        <Box component="div" paddingBlock="40px" display="flex">
          <TextField
            id="standard-basic"
            label="Enter your task"
            name="task-input-field"
            variant="standard"
            ref={inputRef}
            required
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
            sx={{ marginLeft: "5px", height: "100%", alignSelf: "flex-end" }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskInput;
