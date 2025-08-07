"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { CellConfig } from "@/types/cell";
import { getCellsFromStorage, setCellsToStorage } from "@/storage/cellsStorage";

interface CellsContextType {
  cells: CellConfig[];
  updateCell: (id: number, cell: CellConfig) => void;
}

export const CellsContext = createContext<CellsContextType>({
  cells: [],
  updateCell: () => {},
});

export const CellsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cells, setCells] = useState<CellConfig[]>([]);

  useEffect(() => {
    const savedCells = getCellsFromStorage();
    setCells(savedCells);
  }, []);

  useEffect(() => {
    setCellsToStorage(cells);
  }, [cells]);

  const updateCell = (id: number, updatedCell: CellConfig) => {
    const updatedCells = cells.map((cell) => {
      if (cell.id !== id) return cell;

      return { ...cell, ...updatedCell };
    });

    setCells(updatedCells);
  };

  return (
    <CellsContext.Provider value={{ cells, updateCell }}>
      {children}
    </CellsContext.Provider>
  );
};

export const useCells = () => {
  const context = useContext(CellsContext);

  if (!context) {
    throw new Error("useCells must be used within a CellsProvider");
  }

  return context;
};
