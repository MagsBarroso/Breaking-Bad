import Link from 'next/link';
import styles from './CharacterCard.module.css';

export default function CharacterCard({ character }) {
    return (
        <div className={styles.card}>
            <Link key={character.char_id} href={`characters/${character.char_id}`}>
                <a>
                    <div className={styles.cardInner}>

                        <div className={styles.cardImage} style={{backgroundImage: `url(${character.img})`}}>
                   
                        </div>
                    </div>
                        
                    <div className={styles.cardInnerT}>    
                        <div className={styles.cardTitulo}>
                            <h2>{character.name}</h2>
                            <div>{character.portrayed}</div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )

}