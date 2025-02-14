import React from 'react';
import { Radio, Row, Col } from 'antd';

interface TaskFilterProps {
  filter: 'all' | 'completed' | 'pending';
  onChange: (value: 'all' | 'completed' | 'pending') => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, onChange }) => {
  return (
    <Row style={{ width: '100%', marginBottom: '20px' }}>
      <Col span={24}>
        <Radio.Group
          value={filter}
          onChange={(e) => onChange(e.target.value)}
          buttonStyle="solid"
          style={{ width: '100%', textAlign: 'center' }}
        >
          <Radio.Button
            value="all"
            style={{
              width: '33.33%',
              height: '40px',
              lineHeight: '40px',
              fontSize: '18px',
            }}
          >
            All
          </Radio.Button>
          <Radio.Button
            value="completed"
            style={{
              width: '33.33%',
              height: '40px',
              lineHeight: '40px',
              fontSize: '18px',
            }}
          >
            Completed
          </Radio.Button>
          <Radio.Button
            value="pending"
            style={{
              width: '33.33%',
              height: '40px',
              lineHeight: '40px',
              fontSize: '18px',
            }}
          >
            Pending
          </Radio.Button>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default TaskFilter;
