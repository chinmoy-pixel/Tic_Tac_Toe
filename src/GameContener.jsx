import styles from './GameContener.module.css';
const GameContener = () => {
    const box = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className={`${styles.game_contener}`}>
            {box.map((item) => (
                <div key={item} className={`${styles.box}`}>{ item}</div>
            ))}
        </div>
    )
    
}

export default GameContener;