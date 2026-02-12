'use client';

import { useState, useEffect } from 'react';
import Chat from '@/components/Chat';
import Countdown from '@/components/Countdown';
import Login from '@/components/Login';
import { UNLOCK_DATE } from '@/data/messages';

export default function Home() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const targetDate = new Date(UNLOCK_DATE).getTime();

        const checkUnlock = () => {
            const now = new Date().getTime();
            if (now >= targetDate) {
                setIsUnlocked(true);
            }
        };

        checkUnlock();
        const interval = setInterval(checkUnlock, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!isUnlocked) {
        return <Countdown />;
    }

    if (!isAuthenticated) {
        return <Login onLogin={() => setIsAuthenticated(true)} />;
    }

    return <Chat />;
}
