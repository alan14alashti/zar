import React, { useRef } from "react";
import { Card, Checkbox, Typography, Popover } from "antd";
import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed, onToggle }) => {
  const titleRef = useRef<HTMLDivElement>(null); 

  return (
    <Card
      style={{
        height: 120,
        width: "100%",
        marginBottom: 16,
        backgroundColor: completed ? "#f6ffed" : "#fff",
        borderLeft: `6px solid ${completed ? "#52c41a" : "#faad14"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 16px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
      hoverable
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          minWidth: 0, 
          flex: 1, 
        }}
      >
        <Checkbox
          checked={completed}
          onChange={() => onToggle(id)}
          style={{ transform: "scale(1.4)" }}
        />
        <Popover
          content={title} 
          trigger="hover"
          placement="topLeft"
        >
          <Text
            ref={titleRef}
            style={{
              fontSize: "16px",
              display: "block",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontWeight: completed ? "normal" : "bold",
              color: completed ? "#bfbfbf" : "#000",
              lineHeight: "1.5",
              width: "250px"
            }}
            delete={completed}
          >
            {title}
          </Text>
        </Popover>
        {completed ? (
          <CheckCircleOutlined style={{ color: "#52c41a", fontSize: "24px" }} />
        ) : (
          <ClockCircleOutlined style={{ color: "#faad14", fontSize: "24px" }} />
        )}
      </div>
    </Card>
  );
};

export default TaskItem;
