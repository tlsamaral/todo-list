import { Check, Trash } from "lucide-react";

import styles from './Task.module.css'

export interface Task {
    id: number
    title: string
    isDone: boolean
}
interface TaskItemProps { 
    task: Task
    onDone: ({ id, value }: { id: number, value: boolean }) => void
    onDelete: (id: number) => void
}
export function TaskItem({ task, onDone, onDelete }: TaskItemProps) {

    function taskToggleDone() {
        onDone({ id: task.id, value: !task.isDone })
    }

    function handleDeleteTask() {
        onDelete(task.id)
    }

    const taskClass = task.isDone ? styles.checkboxChecked : styles.checkbox
    return (
        <div className={styles.task}>
            <label className={taskClass} htmlFor={`task-check-${task.id}`}>
                <input type="checkbox" id={`task-check-${task.id}`} checked={task.isDone} onChange={() => taskToggleDone()} />
                <Check size={14} />
            </label>
            <span>{task.title}</span>
            <button onClick={() => handleDeleteTask()}><Trash size={16} /></button>
        </div>
    )
}