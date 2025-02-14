import React, { useState, useEffect } from 'react';
import { Task } from '../types/task.ts';
import { Spin, Alert } from 'antd'; 
import TaskItem from './TaskItem';
import TaskSearch from './TaskSearch';
import TaskFilter from './TaskFilter';
import NoTasksMessage from './NoTasksMessage';
import SortButtons from './SortButtons';  
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all'); 
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [sortBy, setSortBy] = useState<'title' | 'status'>('title'); // Sort by title or status
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc'); // Sort order: ascending or descending

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch tasks');
      }
      const data = await response.json();
      setTasks(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const onToggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleSort = (tasks: Task[]) => {
    return tasks.sort((a, b) => {
      if (sortBy === 'title') {
        return sortOrder === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else {
        return sortOrder === 'asc'
          ? (a.completed ? 1 : 0) - (b.completed ? 1 : 0)
          : (b.completed ? 1 : 0) - (a.completed ? 1 : 0);
      }
    });
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'completed') {
        return task.completed;
      } else if (filter === 'pending') {
        return !task.completed;
      }
      return true; 
    })
    .filter((task) => {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

  // Retry function to refetch tasks
  const handleRetry = () => {
    setLoading(true);
    setError(null); // Clear the error message
    fetchTasks();   // Re-fetch tasks
  };

  const sortedTasks = handleSort(filteredTasks);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '80vh',
        padding: '12px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '10',
          padding: '20px',
          width: '100%',
          display: 'flex',
          alignItems: 'center', 
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            fontSize: '28px',
            marginBottom: '16px',
            fontWeight: 'bold',
          }}
        >
          Task List
        </h1>

        <TaskSearch query={searchQuery} onSearch={setSearchQuery} />

        <TaskFilter filter={filter} onChange={setFilter} />

        <SortButtons
          sortBy={sortBy}
          sortOrder={sortOrder}
          setSortBy={setSortBy}
          setSortOrder={setSortOrder}
        />
      </div>

      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <Alert message="Error" description={error} type="error" showIcon />
      ) : sortedTasks.length > 0 ? (
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            maxHeight: '550px',
            minHeight: '400px', 
            overflowY: 'auto', 
            padding: '10px',
            margin: '10px',
            scrollbarWidth: 'thin',
            scrollbarColor: '#888 #f1f1f1', 
            transition: 'scrollbar-color 0.3s ease', 
          }}
        >
          {sortedTasks.map((task) => (
            <TaskItem key={task.id} {...task} onToggle={onToggleTask} />
          ))}
        </div>
      ) : (
        <NoTasksMessage onRetry={handleRetry} />
      )}
    </div>
  );
};

export default TaskList;
