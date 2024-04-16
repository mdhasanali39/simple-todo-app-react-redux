import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import {Box} from '@mui/material'

const TaskPanel = () => {
    return (
        <Box>
            <TaskInput/>
            <TaskList/>
        </Box>
    );
};

export default TaskPanel;