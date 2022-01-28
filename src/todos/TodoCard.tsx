import { ITodo } from './todoModel';

function TodoCard({ data }: { data: ITodo }) {
  return (
    <article className="bg-white rounded shadow p-4 max-h-80">
      <h3>{data.title}</h3>
      <p>Status: {data.completed ? 'Completed' : 'Pending'}</p>
    </article>
  );
}

export default TodoCard;
