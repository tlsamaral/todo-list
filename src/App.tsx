import { PlusCircle } from "lucide-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import styles from "./App.module.css";
import { Task, TaskItem } from "./components/Task/Task";
import { useState } from "react";
import { TaskEmpty } from "./components/Task/TaskEmpty";

function App() {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState('')

  function handleAddNewTask() {
    if(taskTitle === '') {
      return 
    }

    setTaskList([
      ...taskList,
      {
        id: new Date().getTime(),
        title: taskTitle,
        isDone: false
      }
    ])
  }

  function handleChangeTaskTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }

  function handleTaskDone({ id, value }: { id: number, value: boolean }) {
    setTaskList((prev) => {
      const taskIndex = prev.findIndex((task) => task.id === id)

      if(taskIndex === -1) {
        return prev
      }

      const newTaskList = [...prev]
      newTaskList[taskIndex].isDone = value

      return newTaskList
    })
  }

  function handleDeleteTask(id: number) {
    setTaskList((prev) => prev.filter((task) => task.id !== id))
  }

	return (
		<main>
			<Header />
      <section className={styles.containerApp}>
			<div className={styles.createTask}>
				<Input placeholder="Adicione uma nova tarefa" onChange={handleChangeTaskTitle} />
				<Button onClick={handleAddNewTask}>Criar <PlusCircle /></Button>
			</div>
      <div className={styles.tasksContainer}>
        <header className={styles.tasksHeader}>
          <div>
            <span className={styles.tasksCreated}>Tarefas criadas</span>
            <span className={styles.tasksCount}>{taskList.length}</span>
          </div>
          <div>
            <span className={styles.tasksDone}>Concluídas</span>
            <span className={styles.tasksCount}>{taskList.length === 0 ? 0 : <>{taskList.filter((task) => task.isDone).length} de {taskList.length}</>}</span>
          </div>
        </header>
        <div>
          {taskList.length > 0 ? taskList.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDone={handleTaskDone}
              onDelete={handleDeleteTask}
            />
          )) : (
            <TaskEmpty />
          )}
        </div>
      </div>
      </section>
		</main>
	);
}

export default App;
