import { Box, Grid, Paper, Typography, Checkbox } from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { red } from "@mui/material/colors";

const TaskList = () => {
  const taskStyles = {
    position:'relative',
    display:'flex',
    alignItems:'center',
    borderRadius: "15px",
    transition: "all .2s linear",
    "&:hover": {
      backgroundColor: "rgb(191 219 254)",
    },
  };

  return (
    <Box component="div" paddingBlock="30px" maxWidth="70%" margin="0 auto">
        <Typography variant="h4" color="primary" marginBottom="10px">
            All Tasks 
        </Typography>
      <Grid container spacing={2} >
        <Grid item xs={12}>
            <Paper sx={taskStyles}>
              <Checkbox color="success" size="lg" />
              <Typography sx={{ "font-size": "16px" }} component="p">
                todo task
              </Typography>
              <RemoveCircleIcon sx={{position:'absolute', right:'5px',cursor:'pointer',color: red[600]}}/>
            </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskList;
