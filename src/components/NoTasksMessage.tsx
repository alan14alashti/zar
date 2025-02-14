import React from 'react';
import { Result, Button } from 'antd';

interface NoTasksMessageProps {
  onRetry?: () => void;
}

const NoTasksMessage: React.FC<NoTasksMessageProps> = ({ onRetry }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <Result
        status="404"
        title="No Tasks Available"
        subTitle="It seems there are no tasks match to your search"
        extra={onRetry && <Button type="primary" onClick={onRetry}>Retry</Button>}
      />
    </div>
  );
};

export default NoTasksMessage;
