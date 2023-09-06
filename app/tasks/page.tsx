import styles from './tasks.module.css';

export default async function Tasks() {
  const response = await fetch(process.env.DOMAIN_URL + '/api/tasks', { method: 'GET' });
  const tasks = await response.json();

  return (
    <div>
      <h2>Tasks</h2>
      <div>
        {tasks.tasks.map((task: any) => (
          <div key={task._id} className={styles.task}>
            <h2>{task.name}</h2>
            <label htmlFor="isCompleted">
              Done ? : <input type="checkbox" id="isCompleted" checked={task.completed} disabled />
            </label>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
