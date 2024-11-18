import { PlusCircle } from "lucide-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

import styles from "./App.module.css";
import { TaskItem } from "./components/Task/Task";

function App() {
	return (
		<main>
			<Header />
      <section className={styles.containerApp}>
			<div className={styles.createTask}>
				<Input placeholder="Adicione uma nova tarefa" />
				<Button>Criar <PlusCircle /></Button>
			</div>
      {Array.from({ length: 5}).map((_, index) => (
        <TaskItem key={index} />
      ))}
      </section>
		</main>
	);
}

export default App;
