import { ITodo } from './todoModel';

function TodoCard({ data }: { data: ITodo }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>Status: {data.completed ? 'Completed' : 'Pending'}</p>
    </div>
  );
}

export default TodoCard;
