import { ITodo } from './todoModel';

function TodoCard({ data }: { data: ITodo }) {
  return (
    <article className="bg-white rounded shadow p-4 max-h-80 border border-white hover:shadow-xl hover:border-gray-400">
      <h3 className="mb-6">{data.title}</h3>
      <p>
        <span
          className={`rounded-lg py-1 px-2 border text-xs ${
            data.completed
              ? 'border-green-500 text-green-500'
              : 'border-yellow-500 text-yellow-500'
          }`}
        >
          {data.completed ? 'Completed' : 'Pending'}
        </span>
      </p>
    </article>
  );
}

export default TodoCard;
