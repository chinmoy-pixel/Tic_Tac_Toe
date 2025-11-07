import styles from './GameContener.module.css';
import { useState } from 'react';
const GameContener = () => {
    const box = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const boxItems = ['', '', '', '', '', '', '', '', ''];
    const [items, setItems] = useState(boxItems);
    const [currentPlayer, setCurrentPlayer] = useState('X');


    const handleClick = (item) => {
        
        if (items[item] !== '') {
            return;
        }
        const updatedItems = [...items];
        updatedItems[item] = currentPlayer;
            setItems(updatedItems);
            setCurrentPlayer(pre => pre==='X' ? 'O' : 'X');
        
    }

    return (
        <div className={`${styles.game_contener}`}>
            {box.map((item) => (
                <div onClick={()=>handleClick(item)} key={item} className={`${styles.box}`}>{ items[item]}</div>
            ))}
        </div>
    )
    
}

export default GameContener;