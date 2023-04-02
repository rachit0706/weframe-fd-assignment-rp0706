import React from "react";
import "./TaskCard.css";
import Badge from "../Badge/Badge";
import AvatarGroup from "../AvatarGroup/AvatarGroup";

export default function TaskCard({ cardTitle, tags, taskCount, fileCount, messageCount, groupCount }) {
    return (
        <div className="task-card">
            <div className="task-card-head">
                <p className="task-card-title">{cardTitle}</p>
                <div className="task-card-head-right">
                    <img src="images/task.png" alt="..." className="task-card-icon" />
                    <span className="task-card-head-count">{taskCount}</span>
                </div>
            </div>
            <div className="task-card-tags">
                {tags.map(tag => <Badge key={tag.id} label={tag.label} colorScheme={tag.colorScheme} />)}
            </div>
            {groupCount ? (
                <div className="task-card-footer">
                    <AvatarGroup count={groupCount} />
                    <div className="task-card-footer-right">
                        <img src="images/file_present.png" alt="..." className="task-card-icon" />
                        <span className="task-card-file-count">{fileCount}</span>
                        <img src="images/message.png" alt="..." className="task-card-icon" />
                        <span className="task-card-message-count">{messageCount}</span>
                    </div>
                </div>
            ) : null}
        </div>
    )
}