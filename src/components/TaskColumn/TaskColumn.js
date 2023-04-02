import React from "react";
import "./TaskColumn.css";
import TaskCard from "../TaskCard/TaskCard";
import Counter from "../Counter/Counter";

export default function TaskColumn({title, tasks, count, countColor}) {
    return (
        <div className="task-column">
            <div className="task-col-head">
                <div className="task-col-head-left">
                    <p>{title}</p>
                    <Counter label={count} colorScheme={countColor} />
                </div>
                <img src="images\more_horiz.png" alt="..." />
            </div>

            {tasks.map(task => <TaskCard key={task.id} cardTitle={task.title} tags={task.tags} messageCount={task.messageCount} groupCount={task.groupCount} fileCount={task.fileCount} taskCount={task.taskCount}  />)}

            <div className="more-tasks">
                <img src="images/plus.png" alt="..." />
            </div>
        </div>
    )
}