import { ITodo } from './todoModel';

function TodoCard({ data }: { data: ITodo }) {
  return (
    <article className="bg-white rounded shadow p-4 max-h-80 border border-white hover:shadow-xl hover:border-gray-400">
      <h3 className="mb-6">{data.title}</h3>
      <p className="text-xs font-light text-gray-400">
        <span className={data.completed ? 'text-green-500' : 'text-yellow-500'}>
          &#9679;
        </span>
        <span className="ml-2">{data.completed ? 'COMPLETED' : 'PENDING'}</span>
      </p>
    </article>
  );
}

export default TodoCard;
