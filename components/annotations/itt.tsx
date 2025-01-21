"use client"
import React from 'react';
import styles from './itt.module.css';

interface DataCardProps {
  type: string;
  title: string;
  questions: string[];
  points: string[];
}

const DataCard: React.FC<DataCardProps> = ({ type, title, questions, points }) => {
  return (
    <div className={`${styles.dataCard} ${styles[type.toLowerCase()]}`}>
      <div className={styles.typeHeader}>{title}</div>
      <div className={styles.contentWrapper}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Questions</div>
          {questions.map((question, index) => (
            <div key={index} className={styles.point}>{question}</div>
          ))}
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>Key Considerations</div>
          {points.map((point, index) => (
            <div key={index} className={styles.point}>{point}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const DataStructureGuide: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.pixelTitle}>Input Considerations Guide</h1>
        <div className={styles.pixelUnderline}></div>
      </div>
      <div className={styles.cardGrid}>
        <DataCard
          type="integer"
          title="INTEGER"
          questions={[
            "What is the range of the input (e.g., 32-bit signed integer)?",
          ]}
          points={[
            "Are there rounding requirements (floor, ceiling, nearest integer)?",
            "How to handle 0 (possible to divide 0)?",
            "Should negative inputs be treated differently?",
          ]}
        />
        <DataCard
          type="string"
          title="STRING"
          questions={[
            "What is the length of the string?",
            "What character the string may contain?",
          ]}
          points={[
            "Are there case sensitivity or whitespace constraints?",
            "Are there specific patterns (e.g., palindromes, anagrams, unique)?",
          ]}
        />
        <DataCard
          type="array"
          title="ARRAY"
          questions={[
            "What is the size of the array?",
            "What is the range of values in the array?",
          ]}
          points={[
            "Are there specific patterns(e.g., sorted, unique)?",
            "Are there constraints on the input type (e.g., integers, strings)?",
          ]}
        />
        <DataCard
          type="linkedlist"
          title="LINKED LIST"
          questions={[
            "What is the length of the linked list?",
            "What is the range of node values?",
          ]}
          points={[
            "Is the linked list singly or doubly linked?",
            "Are there cycles in the list?",
            "Are there special constraints (e.g., sorted, circular)?",
          ]}
        />
        <DataCard
          type="matrix"
          title="MATRIX"
          questions={[
            "What are the size (rows × columns) of the matrix?",
            "What is the range of values in the matrix?",
          ]}
          points={[
            "Are there specific patterns (e.g., binary, diagonal, symmetric)?",
            "Are there sparse or dense constraints?",
          ]}
        />
        <DataCard
          type="tree"
          title="TREE"
          questions={[
            "How many nodes are in the tree?",
            "What is the range of node values?",
          ]}
          points={[
            "What type of tree is it (BST, Trie, etc.)?",
            "Is it a perfect, full, or complete binary tree?",
            "Are there parent pointers or other special properties?",
          ]}
        />
        <DataCard
          type="graph"
          title="GRAPH"
          questions={[
            "How many nodes and edges are there?",
            "What is the range of node/edge values?",
          ]}
          points={[
            "How is the graph represented (adjacency matrix, adjacency list, etc.)?",
            "Is the graph connected or disconnected?",
            "Is it a simple graph (no loops/multiple edges)?",
          ]}
        />
        <DataCard
          type="stream"
          title="STREAM/ITERATOR"
          questions={[
            "What is the type of elements in the stream (integers, strings, objects)?",
            "Is it finite or infinite? If finite, what is the maximum size?",
            "What operations (read, write, or modify) are permitted on the stream?",
          ]}
          points={[
            "What is the trade-off between different implementation?",
            "How to deal with invalid elements in the stream?",
          ]}
        />
      </div>
    </div>
  );
};

