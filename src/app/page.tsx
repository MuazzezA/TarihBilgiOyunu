"use client";

import { useState } from "react";
import { data } from "../data/infoMap";
import styles from "./page.module.css";

export default function Home() {
    const [current, setCurrent] = useState("root");
    const node = data[current];

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <p className={styles.text}>{node.text}</p>

                <div className={styles.options}>
                    {node.options.map((option) => (
                        <span
                            key={option.id}
                            onClick={() => setCurrent(option.id)}
                            className={styles.optionText}
                        >
              {option.label}
            </span>
                    ))}
                </div>
            </div>
        </main>
    );
}
