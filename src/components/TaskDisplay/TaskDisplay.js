/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./TaskDisplay.css";
import TaskColumn from "../TaskColumn/TaskColumn";
import { colorSchemes, desktopNavLinks, mobileNavLinks, taskData } from "../data";
import SearchBar from "../SearchBar/SearchBar";
import Avatar from "../Avatar/Avatar";
import AvatarGroup from "../AvatarGroup/AvatarGroup";

const { backlogTask, todoTask, inProcessTask, doneTask } = taskData;

export default function TaskDisplay(props) {
    return (
        <div className="main-area">
            <div className="task-display-head">
                <div className="task-display-head-desktop">
                    <div className="task-head-flex">
                        <SearchBar desktop={true} />
                        <img src="images/keyboard_voice.png" alt="..." />
                    </div>
                    <div className="task-head-flex">
                        {desktopNavLinks.map((link, index) => <a className="nav-link" key={index}>{link}</a>)}
                    </div>
                    <div className="task-head-flex">
                        <img src="images/folder_open.png" alt="..." />
                        <img src="images/notifications_none.png" alt="..." />
                        <Avatar image="images/nancy_martino.png" busy={true} notifications={2} />
                    </div>
                </div>
                <div className="task-display-head-desktop-mobile">
                    <div className="task-head-flex">
                        <p>Task Boards</p>
                        <img src="images/edit.png" alt="..." />
                    </div>
                    <div className="task-head-flex">
                        {mobileNavLinks.map((link, index) => <a className="nav-link" key={index}>{link}</a>)}
                    </div>
                    <AvatarGroup count={4} />
                </div>
            </div>
            <div className="task-display">
                <TaskColumn title="Backlog Tasks" tasks={backlogTask} count={5} countColor={colorSchemes.brown} />
                <TaskColumn title="To Do Tasks" tasks={todoTask} count={3} countColor={colorSchemes.pink} />
                <TaskColumn title="In Process" tasks={inProcessTask} count={2} countColor={colorSchemes.purple} />
                <TaskColumn title="Done" tasks={doneTask} count={5} countColor={colorSchemes.green} />
            </div>
        </div>
    )
}