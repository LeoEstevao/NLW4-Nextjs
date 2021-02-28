import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >

    <div className={styles.container}>
      <Head>
        <title> Inicio | Move.It</title>
      </Head>
      {console.log(props)}
      <ExperienceBar />

      {/* // PS: CountdownProvider have access of ChallengesProvider, but ChallengesProvider don't have access of CountdownProvider.  
      The deeper a context is, the more access of external contexts it has*/}
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
            <ChallengeBox />
          <div>

          </div>
        </section>
      </CountdownProvider>
      
    </div>
</ChallengesProvider>
  )

}

// Everything inside this async function, will only be rendered by Server, and not the browser
// This is the next 'intermediary' way to render, that can communicate with our server, apply logics and send the 'html' on our browser, instead of let javascript render our html and the SEO of our page (get by crawler) be 'blanc'
// ctx = context
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
