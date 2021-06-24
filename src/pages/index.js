import CharacterCard from '../components/CharacterCard/CharacterCard';
import styles from './Home.module.css';
import Head from 'next/head';

export default function Home({ characters }) {

  return (
    <>
    <Head>
      <title>Characters</title>
      </Head>
      <div className={styles.container}>
        {characters && characters.map(character => {
          return (
            <CharacterCard key={character.char_id} character={character} />
          )
        })}
      </div>
    </>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://breakingbadapi.com/api/characters');
  const characters = await res.json();

  return {
    props: {
      characters
    },
    revalidate: 10
  }
}