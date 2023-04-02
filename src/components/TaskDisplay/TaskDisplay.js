import React from "react";
import "./TaskDisplay.css";
import TaskColumn from "../TaskColumn/TaskColumn";
import { colorSchemes, taskData } from "../data";

const {backlogTask, todoTask, inProcessTask, doneTask} = taskData;

export default function TaskDisplay(props) {
    return (
        <div className="task-display">
            <TaskColumn title="Backlog Tasks" tasks={backlogTask} count={5} countColor={colorSchemes.brown}  />
            <TaskColumn title="To Do Tasks" tasks={todoTask} count={3} countColor={colorSchemes.pink}  />
            <TaskColumn title="In Process" tasks={inProcessTask} count={2} countColor={colorSchemes.purple}  />
            <TaskColumn title="Done" tasks={doneTask} count={5} countColor={colorSchemes.green}  />
        </div>
    )
}