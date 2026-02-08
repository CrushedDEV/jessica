import React from 'react';
import styles from './MessageBubble.module.css';

interface MessageBubbleProps {
    content: string;
    sender: 'her' | 'me';
    isVisible: boolean;
}

export default function MessageBubble({ content, sender, isVisible }: MessageBubbleProps) {
    if (!isVisible) return null;

    return (
        <div className={`${styles.messageWrapper} ${styles[sender]}`}>
            <div className={`${styles.bubble} ${styles[sender]}`}>
                {content}
            </div>
        </div>
    );
}
