import React from 'react';
import { Input } from 'antd';

interface TaskSearchProps {
  query: string;
  onSearch: (value: string) => void;
}

const TaskSearch: React.FC<TaskSearchProps> = ({ query, onSearch }) => {
  return (
    <Input
      size={'large'}
      placeholder="Search tasks by title"
      value={query}
      onChange={(e) => onSearch(e.target.value)}
      style={{ width: '100%', marginBottom: '20px', }}
    />
  );
};

export default TaskSearch;
