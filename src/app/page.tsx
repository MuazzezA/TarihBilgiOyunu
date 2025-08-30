"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { data, NodeData } from "../data/infoMap";
import styles from "./page.module.css";

export default function Home() {
    const allNodeIds = Object.keys(data);
    const [current, setCurrent] = useState("root");
    const [visitedNodes, setVisitedNodes] = useState<string[]>([]);
    const [completed, setCompleted] = useState(false);

    const node: NodeData = data[current];
    useEffect(() => {
        if (!visitedNodes.includes(current)) {
            setVisitedNodes((prev) => [...prev, current]);
        }
    }, [current, visitedNodes]);

    const allVisited = visitedNodes.length === allNodeIds.length;
    const progressPercentage = Math.round(
        (visitedNodes.length / allNodeIds.length) * 100
    );

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.flagWrapper}>
                    <Image
                        src="/flag.png"
                        alt="Bayrak"
                        width={80}
                        height={80}
                        className={styles.flagImage}
                    />
                </div>

                <p className={styles.text}>{node.text}</p>

                <div className={styles.options}>
                    {allVisited && current === allNodeIds[allNodeIds.length - 1] ? (
                        <span
                            className={styles.optionText}
                            onClick={() => setCompleted(true)}
                        >
              Tamamla
            </span>
                    ) : (
                        node.options.map((option) => (
                            <span
                                key={option.id}
                                onClick={() => setCurrent(option.id)}
                                className={styles.optionText}
                            >
                {option.label}
              </span>
                        ))
                    )}
                </div>

                <div className={styles.progressBarContainer}>
                    <div
                        className={styles.progressBarFill}
                        style={{width: `${progressPercentage}%`}}
                    />
                </div>

                <p className={styles.progressText}>
                    İlerleme: {visitedNodes.length} / {allNodeIds.length} yeni bilgi görüldü
                </p>

                {completed && (
                    <p className={styles.completedText}>
                        🎉 Tüm bilgiler gezildi. Milli birlik ve beraberliğimiz daim olsun! 🇹🇷
                    </p>
                )}
            </div>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/muazzezA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                >
                    <div className={styles.iconWrapper}>
                        <Image
                            src="/github-mark.png"
                            alt="GitHub"
                            width={24}
                            height={24}
                        />
                    </div>
                </a>
            </footer>
        </main>
    );
}
