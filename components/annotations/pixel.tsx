"use client"

import { useEffect } from 'react';
import styles from './pixel.module.css'

const complexityData = {
  "n ≈ 10^8": {
    sections: [
      { name: "Math", percentage: 20, color: "#C7FFED" },
      { name: "GCD/LCM", percentage: 20, color: "#D8FFDB" },
      { name: "Fast Power", percentage: 20, color: "#008F8C" },
      { name: "Binary Rep.", percentage: 20, color: "#015958" },
      { name: "Prime Numbers", percentage: 20, color: "#023535" }
    ],
    complexity: "O(log n) / O(√n) / O(1)"
  },
  "n ≈ 10^6": {
    sections: [
      { name: "Two Pointers", percentage: 15, color: "#FF5E35" },
      { name: "Stack/Queue", percentage: 15, color: "#C9463D" },
      { name: "Hash Table", percentage: 15, color: "#962E40" },
      { name: "Prefix Sum", percentage: 15, color: "#5E1742" },
      { name: "1D-DP", percentage: 20, color: "#330136" },
      { name: "Tree Algorithms", percentage: 20, color: "#160017" }
    ],
    complexity: "O(n)"
  },
  "n ≈ 10^5": {
    sections: [
      { name: "Sorting", percentage: 20, color: "#DCF2F1" },
      { name: "Binary Search", percentage: 20, color: "#7FC7D9" },
      { name: "Heap", percentage: 20, color: "#365486" },
      { name: "Tree Map/Set", percentage: 20, color: "#1D2A78" },
      { name: "Segment Tree", percentage: 20, color: "#0F1035" }
    ],
    complexity: "O(n log n)"
  },
  "n ≈ 10^4": {
    sections: [
      { name: "2D-DP", percentage: 25, color: "#003F5C" },      // Deep Blue
      { name: "Matrix Ops", percentage: 25, color: "#2F4B7C" },  // Navy Blue
      { name: "Graph Algos", percentage: 25, color: "#665191" }, // Purple Blue
      { name: "Grid Traversal", percentage: 25, color: "#A05195" } // Purple
    ],
    complexity: "O(n²)"
},
"n ≈ 200": {
  sections: [
    { name: "Floyd Warshall", percentage: 25, color: "#FF6B35" }, // Orange
    { name: "3D-DP", percentage: 25, color: "#F7C59F" }, // Peach
    { name: "All Pairs SP", percentage: 25, color: "#EFEFD0" }, // Cream
    { name: "Three Pointers", percentage: 25, color: "#004E89" } // Deep Blue
  ],
  complexity: "O(n³)"
},
   "n ≈ 20": {
  sections: [
    { name: "Backtracking", percentage: 25, color: "#52B788" },
    { name: "Bitmask DP", percentage: 25, color: "#40916C" },
    { name: "Subset Gen.", percentage: 25, color: "#2D6A4F" },
    { name: "Permutations", percentage: 25, color: "#1B4332" }
  ],
  complexity: "O(2^n) / O(n!)"
}
};

export function AlgorithmComplexity() {
  return (
    <div className={styles.complexityContainer}>
      {Object.entries(complexityData).map(([title, data]) => (
        <div key={title} className={styles.algorithmCard}>
          <div className={styles.complexityTitle}>{title}</div>
          <div className={styles.complexityNotation}>{data.complexity}</div>
          <div className={styles.visualization}>
            {data.sections.map((section, index) => (
              <div
                key={index}
                className={styles.layer}
                style={{
                  bottom: `${100 - (index + 1) * (100 / data.sections.length)}%`,
                  height: `${100 / data.sections.length}%`,
                  background: section.color,
                }}
              >
                {section.name}
              </div>
            ))}
            <div className={styles.glow} />
          </div>
        </div>
      ))}
    </div>
  );
}
