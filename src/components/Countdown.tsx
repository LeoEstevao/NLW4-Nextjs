import { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        resetCountdown, 
        startCountdown
    } = useContext(CountdownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, `0`).split(``);
    const [secondLeft, secondRight] = String(seconds).padStart(2, `0`).split(``);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {/* Ternary operator without 'else' */}
            {/* { hasFinished && ( */}
            { hasFinished ? (
                <button type="button" 
                disabled
                className={styles.countdownButton}>
                Ciclo encerrado
                </button>
            ):(
                // We are opening {} inside a javascript function, so we need to to use a fragment tag, or just remove '{}'
                <>
                { isActive ? (
                    <button type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}>
                    Abandonar ciclo
                    </button>
                ):(
                    <button type="button" 
                    className={styles.countdownButton} 
                    onClick={startCountdown}>
                    Iniciar um ciclo
                    </button>
                )}
                </>
            )}


        </div>
    )
}