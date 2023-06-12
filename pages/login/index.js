import { Button, Container } from "react-bootstrap";
import styles from "./Login.module.css";

export default function App() {
    return (
        <Container fluid className={styles.loginform}>
            <h2 className={styles.headerTitle}>Login</h2>
            <div>
                <div className={styles.row}>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your username" />
                </div>
                <div className={styles.row}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div id="button" className={styles.row}>
                    <Button>Log in</Button>
                </div>
            </div>
        </Container>
    );
}