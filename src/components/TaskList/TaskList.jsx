import { Box, Grid, Paper, Typography, Checkbox } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTaskStatus } from "../../features/todos/todosSlice";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const TaskList = () => {
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // console.log(isChecked)

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isChecked) {
      dispatch(updateTaskStatus(selectedTaskId));
    }
  }, [dispatch, isChecked, selectedTaskId]);


  const taskStyles = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "15px",
    transition: "all .2s linear",
    // "&:hover": {
    //   backgroundColor: "rgb(191 219 254)",
    // },
  };

  // func for deleting task
  const handleDeleteTask = (id) => {
    dispatch(deleteTodo(id));
  };

  // func for handle checkbox change
  // and for update task status to completed
  const handleCheckboxChange = (e, id) => {
    setIsChecked(e.target.checked);
    setSelectedTaskId(id);
  };

  return (
    <Box component="div" paddingBlock="30px" maxWidth="70%" margin="0 auto">
      <Typography variant="h4" color="primary" marginBottom="10px">
        All Tasks
      </Typography>
      <Grid container spacing={2}>
        {todos?.length > 0 ? (
          todos.map((todo) => (
            <Grid key={todo.id} item xs={12}>
              <Paper sx={{...taskStyles, backgroundColor:`${todo.status === 'completed' ? red[200]:''}`, "&:hover":{backgroundColor:`${todo.status === 'completed'? '':'rgb(191 219 254)'}`}}}>
                <Checkbox
                  onChange={(e) => handleCheckboxChange(e, todo.id)}
                  color="success"
                  size="lg"
                  sx={{pointerEvents:`${todo.status === 'completed'? 'none':'auto'}`}}
                  checked={todo.status === 'completed'? true:false}
                />
                <Typography sx={{ "font-size": "16px", textDecoration:`${todo.status === 'completed' && 'line-through'}`, fontStyle:`${todo.status === 'completed' && 'italic'}`, pointerEvents:`${todo.status === 'completed'? 'none':'auto'}` }} component="p">
                  {todo.taskName}
                </Typography>
                <RemoveCircleIcon
                  onClick={() => handleDeleteTask(todo.id)}
                  sx={{
                    position: "absolute",
                    right: "5px",
                    cursor: "pointer",
                    color: red[600],
                  }}
                />
              </Paper>
            </Grid>
          ))
        ) : (
          <Box component="form">
            <Typography variant="body1" marginTop="20px" paddingInline="17px">
              You have not created any todo yet. Create new todo
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default TaskList;
