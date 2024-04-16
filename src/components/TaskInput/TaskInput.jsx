import {
  Box,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";

const TaskInput = () => {

  return (
    <Box
      component="div"
      display="flex"
      justifyContent="center"
      p="16px"
    >
      <Box component="form">
        <Box component="div" paddingBlock="40px" display="flex">
          <FormControl>
            <InputLabel htmlFor="my-input">Enter Your Task</InputLabel>
            <Input id="my-input" type="text" />
          </FormControl>
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
