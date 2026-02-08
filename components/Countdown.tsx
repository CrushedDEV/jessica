'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';
import { UNLOCK_DATE } from '@/data/messages';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date(UNLOCK_DATE).getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.countdownContainer}>
            <div className={styles.content}>
                <div className={styles.heart}>💝</div>
                <h1 className={styles.title}>Holi Jessica...</h1>
                <p className={styles.subtitle}>Podras ver un mensajito que prepare para ti en...</p>

                <div className={styles.timer}>
                    <div className={styles.timeBox}>
                        <div className={styles.timeValue}>{timeLeft.days}</div>
                        <div className={styles.timeLabel}>Días</div>
                    </div>
                    <div className={styles.separator}>:</div>
                    <div className={styles.timeBox}>
                        <div className={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div className={styles.timeLabel}>Horas</div>
                    </div>
                    <div className={styles.separator}>:</div>
                    <div className={styles.timeBox}>
                        <div className={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div className={styles.timeLabel}>Minutos</div>
                    </div>
                    <div className={styles.separator}>:</div>
                    <div className={styles.timeBox}>
                        <div className={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div className={styles.timeLabel}>Segundos</div>
                    </div>
                </div>

                <p className={styles.hint}>Espero que te guste :3... 🤍</p>
            </div>
        </div>
    );
}
