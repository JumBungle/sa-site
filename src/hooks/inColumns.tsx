import { useState } from "react";

export function useColumns<T>(array: T[], columns: number) {
  const [organizedArray, setOrganizedArray] = useState<T[][]>(() => {
    const result: T[][] = new Array(columns).fill([]).map(() => []);

    for (let i = 0; i < array.length; i++) {
      result[i % columns].push(array[i]);
    }

    return result;
  });

  return organizedArray;
}
