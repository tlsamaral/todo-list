import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export function Button(props: ButtonProps) {
	return <button {...props} className={styles.button} />;
}
