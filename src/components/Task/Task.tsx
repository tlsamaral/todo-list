import { Trash } from "lucide-react";

import styles from './Task.module.css'

export function TaskItem() {
    return (
        <div className={styles.task}>
            <input type="checkbox" />
            <span>Estudar React</span>
            <button><Trash /></button>
        </div>
    )
}