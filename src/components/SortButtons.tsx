import React from 'react';
import { Button } from 'antd';
import { UpOutlined, DownOutlined, SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';

interface SortButtonsProps {
  sortBy: 'title' | 'status';
  sortOrder: 'asc' | 'desc';
  setSortBy: React.Dispatch<React.SetStateAction<'title' | 'status'>>;
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

const SortButtons: React.FC<SortButtonsProps> = ({ sortBy, sortOrder, setSortBy, setSortOrder }) => {
  return (
    <div>
      <Button
        type="primary"
        ghost
        icon={sortBy === 'title' ? <SortDescendingOutlined /> : <SortAscendingOutlined />}
        onClick={() => {
          setSortBy(sortBy === 'title' ? 'status' : 'title');
        }}
      >
        Sort by {sortBy === 'title' ? 'Status' : 'Title'}
      </Button>

      <Button
        style={{ marginLeft: '8px' }}
        icon={sortOrder === 'asc' ? <UpOutlined /> : <DownOutlined />}
        onClick={() => {
          setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }}
      >
        {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      </Button>
    </div>
  );
};

export default SortButtons;
