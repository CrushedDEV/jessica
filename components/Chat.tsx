'use client';

import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import { MESSAGE_FLOW, CONTACT_NAME, PLAYLIST_URL, PHONE_NUMBER, TYPING_DELAY, MESSAGE_DELAY } from '@/data/messages';
import styles from './Chat.module.css';

export default function Chat() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [userAnswer, setUserAnswer] = useState<string | null>(null);
    const [waitingForAnswer, setWaitingForAnswer] = useState(false);
    const [userAnswers, setUserAnswers] = useState<Array<{ questionIndex: number; answer: string }>>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);
    const prevIndexRef = useRef(0);

    // Auto-scroll solo cuando aparecen nuevos mensajes
    useEffect(() => {
        // Solo hacer scroll si el índice aumentó (nuevo mensaje)
        if (currentIndex > prevIndexRef.current) {
            chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            prevIndexRef.current = currentIndex;
        }
    }, [currentIndex]);

    // Lógica de progresión de mensajes
    useEffect(() => {
        if (currentIndex >= MESSAGE_FLOW.length) return;

        const currentMessage = MESSAGE_FLOW[currentIndex];

        // Si es una pregunta
        if (currentMessage.type === 'question') {
            if (!showQuestion && !waitingForAnswer && !userAnswer) {
                // Mostrar typing y luego la pregunta
                setIsTyping(true);
                const timer = setTimeout(() => {
                    setIsTyping(false);
                    setShowQuestion(true);
                    setWaitingForAnswer(true);
                }, TYPING_DELAY);
                return () => clearTimeout(timer);
            } else if (userAnswer && !waitingForAnswer) {
                // Ya respondió, avanzar índice para incluir la pregunta y continuar
                const timer = setTimeout(() => {
                    setCurrentIndex(prev => prev + 1); // Incluir la pregunta en el historial
                    setShowQuestion(false);
                    setUserAnswer(null);
                }, 800); // Pequeño delay para que se vea la respuesta
                return () => clearTimeout(timer);
            }
            // Esperar respuesta del usuario
            return;
        }

        // Para mensajes normales
        setIsTyping(true);
        const typingTimer = setTimeout(() => {
            setIsTyping(false);
            setCurrentIndex(prev => prev + 1);
        }, TYPING_DELAY);

        return () => clearTimeout(typingTimer);
    }, [currentIndex, userAnswer, showQuestion, waitingForAnswer]);

    const handleAnswer = (answer: string) => {
        setShowQuestion(false);
        setWaitingForAnswer(false);
        setUserAnswer(answer);
        // Guardar la respuesta permanentemente
        setUserAnswers(prev => [...prev, { questionIndex: currentIndex, answer }]);
    };

    const renderMessage = (index: number) => {
        const message = MESSAGE_FLOW[index];

        switch (message.type) {
            case 'text':
                return (
                    <MessageBubble
                        key={index}
                        content={message.content}
                        sender={message.sender}
                        isVisible={true}
                    />
                );

            case 'question':
                return (
                    <div key={index}>
                        <MessageBubble
                            content={message.content}
                            sender="her"
                            isVisible={true}
                        />
                        {showQuestion && waitingForAnswer && (
                            <div className={styles.buttonGroup}>
                                {message.options.map((option, i) => (
                                    <button
                                        key={i}
                                        className={styles.optionButton}
                                        onClick={() => handleAnswer(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'flowers':
                return (
                    <div key={index} className={styles.flowersContainer}>
                        <div className={styles.flowers}>
                            <span className={styles.flower}>🌷</span>
                            <span className={styles.flower}>🌸</span>
                            <span className={styles.flower}>🌼</span>
                            <span className={styles.flower}>🌺</span>
                            <span className={styles.flower}>🌻</span>
                        </div>
                        <MessageBubble
                            content="Asi que te dejo aqui una florecitas, ya que no puedo dartelas en persona ;)"
                            sender="her"
                            isVisible={true}
                        />
                    </div>
                );

            case 'playlist':
                return (
                    <div key={index} className={styles.playlistContainer}>
                        <div className={styles.playlistCard}>
                            <iframe
                                src={PLAYLIST_URL}
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                );

            case 'phone':
                return (
                    <div key={index} className={styles.phoneContainer}>
                        <div className={styles.phoneCard}>
                            <div className={styles.phoneIcon}>📱</div>
                            <div className={styles.phoneNumber}>{PHONE_NUMBER}</div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className={styles.chatContainer}>
            <div className={styles.chatHeader}>
                <div className={styles.avatar}>👤</div>
                <div className={styles.contactInfo}>
                    <div className={styles.contactName}>{CONTACT_NAME}</div>
                    <div className={styles.status}>
                        {isTyping ? 'escribiendo...' : 'online'}
                    </div>
                </div>
            </div>

            <div className={styles.chatMessages}>
                {MESSAGE_FLOW.slice(0, currentIndex).map((_, index) => {
                    const userAnswerForQuestion = userAnswers.find(ua => ua.questionIndex === index);
                    return (
                        <React.Fragment key={index}>
                            {renderMessage(index)}
                            {userAnswerForQuestion && (
                                <MessageBubble
                                    content={userAnswerForQuestion.answer}
                                    sender="me"
                                    isVisible={true}
                                />
                            )}
                        </React.Fragment>
                    );
                })}

                {showQuestion && currentIndex < MESSAGE_FLOW.length && MESSAGE_FLOW[currentIndex].type === 'question' && (
                    renderMessage(currentIndex)
                )}

                {userAnswer && (
                    <MessageBubble
                        content={userAnswer}
                        sender="me"
                        isVisible={true}
                    />
                )}

                {isTyping && (
                    <div className={styles.typingIndicator}>
                        <div className={styles.typingDot}></div>
                        <div className={styles.typingDot}></div>
                        <div className={styles.typingDot}></div>
                    </div>
                )}

                <div ref={chatEndRef} />
            </div>
        </div>
    );
}
