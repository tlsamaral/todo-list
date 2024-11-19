import styles from './TaskEmpty.module.css'
export function TaskEmpty() {
    return (
        <div className={styles.taskEmpty}>
            <img src="/clipboard.svg" alt="Clipboard" />
            <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    );
}