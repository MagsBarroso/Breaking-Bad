import styles from './Character.module.css';
import Head from 'next/head';

export default function Character({ character }) {

    return (
        <>
            <Head>
                <title>Character: {character.name}</title>
            </Head>
            <div>
                <h5 className={styles.cardTitulo}>{character.name}</h5>

                <div className={styles.container}>

                    <div className={styles.rowInfoC}>
                        <div className={styles.cardImage}>
                            <img height="100" src={character.img} />
                        </div>
                    </div>

                    <div className={styles.rowsContent}>

                        <div className={styles.rowInfo}>
                            <div className={styles.info}>
                                <div>Nickname:</div>
                            </div>
                            <div>{character.nickname}</div>
                        </div>

                        <div className={styles.rowInfo}>
                            <div className={styles.info}>
                                <div>Portrayed:</div>
                            </div>
                            <div>{character.portrayed}</div>
                        </div>

                        <div className={styles.rowInfo}>
                            <div className={styles.info}>
                                <div>Birthday</div>
                            </div>

                            <div>{character.birthday}</div>
                        </div>

                        <div className={styles.rowInfo}>
                            <div className={styles.info}>
                                <div>Status:</div>
                            </div>

                            <div>{character.status}</div>
                        </div>

                        <div className={styles.rowInfo}>
                            <div className={styles.info}>
                                <div>Occupation:</div>
                            </div>

                            <div>{character.occupation.join(', ')}</div>
                        </div>

                        <div className={styles.rowInfo}>
                            <div className={styles.info}>
                                <div>Season:</div>
                            </div>

                            <div>{character.appearance.join(', ')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const code = params.slug;
    const res = await fetch(`https://breakingbadapi.com/api/characters/${code}`);

    const character = await res.json();

    return {
        props: {
            character: character[0]
        },
        revalidate: 10
    }
}