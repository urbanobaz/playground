import styles from './Days.module.scss';

const Days: React.FC = () => {
    return (<>
            <h1 className={styles.title}>Days Of Our Lives</h1>
            <p className={styles.dayText}>10,574</p>
            <div className={styles.day}>
                <p>Main idea of the day</p>
            </div>
            <p className={styles.timeText}>7:30 AM - 9:30 PM</p>
        </>
    )
}

export default Days;