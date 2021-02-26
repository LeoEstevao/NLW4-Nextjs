import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio | Move.It</title>
      </Head>
      
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
  )
}
